# QA Review: AWS CloudFront 정식 배포 + CI/CD 자동화

> 모드: spec | 등급: Task | 리뷰일: 2026-04-15
> spec: `.ouroboros/docs/spec/20260415_aws_cloudfront_deploy_spec.md`

## 리뷰 패널

1. **AWS 클라우드 아키텍트** — S3/CloudFront/Route53/ACM/IAM 인프라 설계 검증
2. **DevOps/CI-CD 엔지니어** — GitHub Actions 워크플로우, OIDC, 배포 파이프라인 검증

## 채택 (5건)

### A-1. S3 버킷 정책 적용 단계 추가 (AWS 아키텍트)
- **내용:** Phase 1-2에 "OAC 생성 후 CloudFront가 제공하는 S3 버킷 정책을 복사하여 S3 버킷 정책에 적용" 단계를 명시
- **사유:** 이 단계를 빠뜨리면 403 에러 발생. 초보자가 놓치기 쉬운 핵심 단계.

### A-4. `.eu` 도메인 자격 요건 확인 (AWS 아키텍트)
- **내용:** Phase 1-3에 `.eu` 도메인은 EU 거주자/법인만 등록 가능하다는 자격 요건 명시. Route 53 지원 여부 사전 확인. 불가 시 외부 등록기관 fallback 경로 포함.
- **사유:** 등록 불가 시 전체 일정에 영향. 사전 확인 필수.

### B-2. IAM 권한 정책 상세화 (DevOps 엔지니어)
- **내용:** IAM 권한 목록을 구체 JSON으로 보완: `s3:ListBucket`, `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`, `cloudfront:CreateInvalidation`
- **사유:** `s3 sync`는 ListBucket/GetObject도 필요. 불완전한 권한 → 배포 실패.

### B-3. 트리거를 `push: tags` 방식으로 변경 (DevOps 엔지니어)
- **내용:** `release: [published]` → `push: tags: ['v*']`로 변경. 또는 release 유지 시 테스트 절차에 "GitHub UI에서 Release 생성" 단계 명시.
- **사유:** `git tag && git push`만으로는 release 이벤트가 트리거되지 않음. 사용자의 "release 태그를 달면" 의도와 `push: tags`가 더 부합.

### B-5. 워크플로우 concurrency 설정 (DevOps 엔지니어)
- **내용:** `concurrency: { group: deploy, cancel-in-progress: true }` 추가
- **사유:** 동시 배포 방지 안전장치. 비용 0.

## 보류 (1건)

### A-5. 캐시 정책 분리 (AWS 아키텍트)
- **내용:** `index.html` → `Managed-CachingDisabled`, `assets/*` → `CachingOptimized`로 분리
- **사유:** 이상적이지만 CloudFront Behavior를 2개로 나눠야 하여 설정 복잡도 증가. CloudFront 무효화(`/*`)로 현재 커버 가능. 정식 운영 안정화 후 검토.

## 기각 (2건)

### A-2. CloudFront Functions로 SPA 라우팅 (AWS 아키텍트)
- **사유:** Custom Error Response 방식이 더 간단하고 Task 규모에 적합. 실제 missing 자산 200 반환 문제는 이 프로젝트 규모에서 실질적 영향 없음.

### B-4. GitHub Environments 사용 (DevOps 엔지니어)
- **사유:** 단일 환경(production)의 Task 규모에서 과도한 설정. 팀 규모 확대 시 재검토.
