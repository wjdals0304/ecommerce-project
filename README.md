# 이커머스 프로젝트

## 프로젝트 소개

Next.js 기반의 이커머스 웹 애플리케이션입니다.
사용자 인증, 상품 조회, 장바구니, 결제 등의 기능을 제공합니다.

## 프로젝트 URL

- 배포 URL: https://ecommerce-project-liart-one.vercel.app/

## 주요 기능

- 사용자 인증 (이메일/비밀번호, Google OAuth)
- 상품 조회 및 검색
- 장바구니 관리
- 주문 및 결제
- 반응형 디자인

## 기술 스택

- **프론트엔드**

  - Next.js 15.1.6 (Pages Router)
  - TypeScript
  - Styled Components
  - React Query
  - NextAuth.js

- **백엔드**
  - Nest.js
  - Supabase

## 프로젝트 구조 (Feature-Sliced Design)

```
src/
├── pages/           # Next.js Pages Router
├── features/        # 기능별 도메인
│   ├── about/      # 소개 페이지
│   ├── allShop/    # 전체 상품 페이지
│   ├── auth/       # 인증 관련
│   ├── blog/       # 블로그
│   ├── blogDetail/ # 블로그 상세
│   ├── cart/       # 장바구니
│   ├── contact/    # 문의
│   ├── home/       # 홈페이지
│   ├── profile/    # 프로필
│   ├── search/     # 검색
│   ├── shopDetail/ # 상품 상세
│   └── signUp/     # 회원가입
└── shared/          # 공통 레이어
    ├── config/     # 설정 파일
    ├── hooks/      # 커스텀 훅
    ├── lib/        # 유틸리티 함수
    ├── types/      # 타입 정의
    └── ui/         # UI 컴포넌트
```

### FSD 구조 설명

- **pages**: Next.js Pages Router 기반의 페이지 컴포넌트
- **features**: 비즈니스 도메인별 기능 모듈
  - 각 feature는 독립적인 도메인 로직을 포함
  - UI, model, api 등의 하위 레이어를 포함할 수 있음
- **shared**: 여러 feature에서 공통으로 사용되는 코드
  - UI 컴포넌트, 유틸리티 함수, 타입 정의 등

## API 엔드포인트

- `POST /auth/signup/email` - 이메일 회원가입
- `POST /auth/signin/email` - 이메일 로그인
- `POST /auth/signup/google` - Google OAuth 회원가입
- `GET /shop/all` - 전체 상품 조회
- `GET /shop/:id` - 상품 상세 조회
- `POST /cart/add` - 장바구니 추가
- `GET /cart` - 장바구니 조회
- `POST /orders` - 주문 생성

## 문서

프로젝트의 상세 문서는 `docs` 디렉토리에서 확인할 수 있습니다.

### 문서 구조

```
docs/
├── troubleshooting/    # 문제 해결 관련 문서
│   └── auth-state-persistence.md  # 인증 상태 유지 관련 트러블슈팅
└── README.md          # 문서 가이드
```

### 주요 문서

- [인증 상태 유지 트러블슈팅](./docs/troubleshooting/auth-state-persistence.md)
  - 로그인 후 새로고침 시 인증 상태 유지 문제 해결 방법
  - 쿠키 기반 인증 상태 관리 구현
