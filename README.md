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

  - Next.js 13
  - TypeScript
  - Styled Components
  - React Query
  - NextAuth.js

- **백엔드**
  - Nest.js
  - Supabase

## 프로젝트 구조

```
src/
├── components/         # 공통 컴포넌트
├── features/          # 기능별 컴포넌트
├── hooks/            # 커스텀 훅
├── pages/            # 페이지 컴포넌트
├── types/            # 타입 정의
├── utils/            # 유틸리티 함수
└── config/           # 설정 파일
```

## API 엔드포인트

- `POST /auth/signup/email` - 이메일 회원가입
- `POST /auth/signin/email` - 이메일 로그인
- `POST /auth/signup/google` - Google OAuth 회원가입
- `GET /shop/all` - 전체 상품 조회
- `GET /shop/:id` - 상품 상세 조회
- `POST /cart/add` - 장바구니 추가
- `GET /cart` - 장바구니 조회
- `POST /orders` - 주문 생성
