# AWS CloudFront 정식 배포 + CI/CD 자동화

> 등급: Task | 점수: 3 | 작성일: 2026-04-15

## 목표

Vercel 임시 배포 → AWS S3 + CloudFront 정식 배포로 전환하고,
release 태그 push 시 GitHub Actions로 자동 배포되는 CI/CD 파이프라인을 구축한다.

## 아키텍처 개요

```
[GitHub] --release tag push--> [GitHub Actions]
                                    │
                                    ├─ npm run build
                                    ├─ aws s3 sync dist/ s3://bucket
                                    └─ aws cloudfront create-invalidation /*
                                    
[사용자] --> CloudFront URL (*.cloudfront.net) --> [CloudFront] --> [S3 Bucket]
            (도메인 확정 후: 커스텀 도메인 → Route 53 → CloudFront + ACM 인증서)
```

## 작업 목록

### Phase 1: AWS 인프라 설정 (콘솔/CLI — 가이드)

- [ ] **1-1. S3 버킷 생성**
  - 버킷 이름: `hdxwill-eu-web` (또는 선호하는 이름)
  - 리전: `eu-central-1` (프랑크푸르트) — EU 타겟이므로 유럽 리전 권장
  - 퍼블릭 액세스 차단: **전부 ON** (CloudFront OAC로만 접근)
  - 정적 웹 호스팅: OFF (CloudFront가 처리)

- [ ] **1-2. CloudFront 배포 생성**
  - Origin: S3 버킷
  - Origin Access Control (OAC) 설정
  - ⚠️ **OAC 생성 후 CloudFront가 제공하는 S3 버킷 정책을 복사 → S3 버킷 > 권한 > 버킷 정책에 붙여넣기** (이 단계를 빠뜨리면 403 에러)
  - Default root object: `index.html`
  - **SPA 라우팅 처리**: Custom Error Response 설정
    - 403 → `/index.html` (200)
    - 404 → `/index.html` (200)
  - Price Class: `PriceClass_100` (북미+유럽) 또는 `PriceClass_200`
  - HTTP → HTTPS 리다이렉트 설정
  - 캐시 정책: `CachingOptimized` (정적 자산)

- [ ] **1-3. (후속) 도메인 & DNS 설정 — 도메인 확정 후 진행**
  - 도메인 미정 상태. 확정 후 아래 절차 수행:
  - 도메인 구매 (Route 53 또는 외부 등록기관)
  - Route 53 Hosted Zone 생성/연결
  - A 레코드 (Alias) → CloudFront 배포 도메인 연결
  - 참고: `.eu` 도메인은 EU 거주자/법인만 등록 가능 (트러스티 서비스 또는 독일 법인 명의 필요)

- [ ] **1-4. (후속) ACM SSL 인증서 발급 — 도메인 확정 후 진행**
  - ⚠️ **반드시 `us-east-1` (버지니아) 리전에서 발급** — CloudFront는 us-east-1 인증서만 사용
  - 도메인: `{확정 도메인}`, `*.{확정 도메인}` (와일드카드 포함 권장)
  - 검증: DNS 검증 (Route 53 자동 CNAME 추가)
  - CloudFront 배포에 인증서 연결 + CNAME 추가

- [ ] **1-5. GitHub OIDC → IAM Role 설정**
  - IAM Identity Provider 생성: `token.actions.githubusercontent.com`
  - IAM Role 생성 (신뢰 정책):
    ```json
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::{ACCOUNT_ID}:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:{OWNER}/hdxwill-web-eu:ref:refs/tags/*"
        }
      }
    }
    ```
  - 권한 정책 (최소 권한):
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "S3Deploy",
          "Effect": "Allow",
          "Action": [
            "s3:ListBucket",
            "s3:GetObject",
            "s3:PutObject",
            "s3:DeleteObject"
          ],
          "Resource": [
            "arn:aws:s3:::{BUCKET_NAME}",
            "arn:aws:s3:::{BUCKET_NAME}/*"
          ]
        },
        {
          "Sid": "CloudFrontInvalidation",
          "Effect": "Allow",
          "Action": "cloudfront:CreateInvalidation",
          "Resource": "arn:aws:cloudfront::{ACCOUNT_ID}:distribution/{DISTRIBUTION_ID}"
        }
      ]
    }
    ```
  - Role ARN을 GitHub repo Settings > Secrets에 `AWS_ROLE_ARN`으로 저장

### Phase 2: GitHub Actions 워크플로우 (코드 산출물)

- [ ] **2-1. `.github/workflows/deploy.yml` 생성**
  - 트리거: `push: tags: ['v*']` (v로 시작하는 태그 push 시 자동 배포)
  - 동시 배포 방지: `concurrency: { group: deploy, cancel-in-progress: true }`
  - OIDC 인증 → AWS 자격 증명 취득
  - `npm ci` → `npm run build` → S3 sync → CloudFront invalidation

### Phase 3: 검증 & Vercel 정리

- [ ] **3-1. 수동 테스트 배포**
  - 로컬에서 `npm run build` → `aws s3 sync dist/ s3://버킷명`
  - CloudFront URL로 접속 확인 (SPA 라우팅, 다국어 등)
- [ ] **3-2. 태그 push 배포 테스트**
  - `git tag v1.0.0 && git push origin v1.0.0`
  - GitHub Actions 자동 트리거 확인 → S3 업로드 → CloudFront 무효화 확인
  - CloudFront URL로 접속 확인 (도메인 연결 전까지 `*.cloudfront.net` 사용)
- [ ] **3-3. Vercel 배포 정리 (선택)**
  - 정식 배포 안정화 확인 후 Vercel 프로젝트 삭제 또는 비활성화

## 작업 범위 (수정 대상 파일)

| 파일 | 작업 | 비고 |
|------|------|------|
| `.github/workflows/deploy.yml` | **신규 생성** | CI/CD 워크플로우 |

> vite.config.js 수정 불필요 — 기본 `dist/` 출력이 S3 배포에 적합

## 주의사항

1. **ACM 인증서는 반드시 `us-east-1`에서 발급** — CloudFront는 버지니아 리전 인증서만 지원. 다른 리전에서 발급하면 연결 불가.
2. **SPA 라우팅**: CloudFront Custom Error Response로 403/404 → index.html 매핑 필수. 이것 없으면 새로고침 시 404 발생.
3. **OIDC 신뢰 정책의 `sub` 조건**: `refs/tags/*`로 제한하여 태그 push만 허용. 브랜치 push에서는 Role assume 불가 → 보안상 안전.
4. **CloudFront 무효화**: 배포마다 `/*` 무효화 실행. 월 1,000건 무료, 초과 시 건당 $0.005.
5. **도메인 미정**: 도메인 확정 전까지 CloudFront URL(`*.cloudfront.net`)로 운영. 도메인 확정 후 Route 53 + ACM 연결. `.eu` 희망 시 EU 거주자/법인 자격 또는 트러스티 서비스 필요.
6. **OAC → S3 버킷 정책**: CloudFront OAC 생성 후 제공되는 버킷 정책을 S3에 수동 적용해야 한다. 이 단계를 빠뜨리면 403 에러.
7. **IAM 권한**: `s3 sync`는 `ListBucket`, `GetObject`도 필요. PutObject/DeleteObject만으로는 배포 실패.

## GitHub Actions 워크플로우 상세

```yaml
# .github/workflows/deploy.yml
name: Deploy to AWS CloudFront

on:
  push:
    tags:
      - 'v*'

concurrency:
  group: deploy
  cancel-in-progress: true

permissions:
  id-token: write   # OIDC 토큰 요청
  contents: read     # 코드 체크아웃

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure AWS Credentials (OIDC)
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: eu-central-1

      - name: Deploy to S3
        run: aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} --delete

      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

### GitHub Secrets 필요 목록

| Secret | 값 | 예시 |
|--------|-----|------|
| `AWS_ROLE_ARN` | IAM Role ARN | `arn:aws:iam::123456789012:role/github-deploy-role` |
| `S3_BUCKET_NAME` | S3 버킷 이름 | `hdxwill-eu-web` |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront 배포 ID | `E1234567890ABC` |

## 비용 예상 (월간, 저트래픽 기준)

| 항목 | 예상 비용 |
|------|----------|
| Route 53 호스팅 (도메인 연결 후) | $0.50 |
| 도메인 (연간, 미정) | TBD |
| S3 스토리지 | < $0.10 |
| CloudFront | < $1.00 (프리티어 포함) |
| ACM 인증서 | 무료 |
| **월 합계** | **~$1-2** |

## 참고

- 메모리 검색: 관련 gotcha/pattern 없음 (첫 경험)
- Vercel의 `vercel.json` SPA rewrite → CloudFront Custom Error Response로 대체
- `/qa spec` 리뷰 반영 완료 (2026-04-15): 5건 채택, 1건 보류, 2건 기각
  - 리뷰 상세: `.ouroboros/docs/qa/20260415_aws_cloudfront_deploy_review.md`
