# QA Code Review: deploy.yml

> 모드: code | 등급: Task | 리뷰일: 2026-04-15
> 대상: `.github/workflows/deploy.yml`

## 리뷰 패널

1. **CI/CD 엔지니어** — GitHub Actions 워크플로우 문법, 트리거, 최적화 검증
2. **보안 감사관** — OIDC 인증, 권한 범위, Secrets 노출 위험 검증

## 총평

워크플로우는 간결하고 표준 패턴을 잘 따르고 있다.
OIDC 인증 + 최소 권한 permissions로 보안도 적절하다.
심각한 버그나 보안 취약점 없음.

## 채택 (1건)

### C-3. `environment: production` 추가 (CI/CD 엔지니어)
- **내용:** `jobs.deploy`에 `environment: production` 1줄 추가
- **사유:** GitHub UI에서 배포 이력 추적 가능. 비용 0, side effect 없음.
- **수정 위치:** deploy.yml:18 (`runs-on:` 아래)

## 보류 (1건)

### S-1. Action SHA pinning (보안 감사관)
- **내용:** `actions/checkout@v4` → `actions/checkout@{sha}` 형태로 변경
- **사유:** supply chain attack 방어에 유효하나, 가독성 저하 + 업데이트 관리 부담. 팀 규모/보안 정책에 따라 결정.

## 기각 (2건)

### C-1. 배포 알림 (CI/CD 엔지니어)
- **사유:** Task 규모에서 과도한 설정. GitHub UI로 충분.

### C-2. Node.js 버전 동기화 (CI/CD 엔지니어)
- **사유:** .nvmrc 미사용 프로젝트. 현재 하드코딩이 가장 명확.
