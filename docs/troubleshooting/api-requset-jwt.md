# SSR 환경에서의 토큰 처리 트러블슈팅

## 문제 상황

- 서버 사이드 렌더링(SSR) 환경에서 `window` 객체 접근 시 오류 발생
- 클라이언트 사이드에서만 사용 가능한 쿠키 접근 시도
- 서버와 클라이언트 환경에서의 토큰 처리 방식 차이
- 서버 사이드 API 요청 시 쿠키 접근 방식의 차이

## 원인 분석

1. **환경 차이**

   - 서버 환경에서는 `window` 객체가 존재하지 않음
   - 쿠키는 브라우저 환경에서만 접근 가능
   - SSR 시 서버에서 API 요청을 보낼 때 토큰 처리가 필요

2. **보안 문제**

   - 서버에서 클라이언트 쿠키에 접근 시도 시 보안 위험
   - 서버 사이드에서의 토큰 노출 위험

3. **Next.js의 특별한 컨텍스트**
   - `getServerSideProps`는 Next.js의 특별한 실행 환경 제공
   - 서버 사이드에서도 `context`를 통해 쿠키 접근 가능
   - 일반 JavaScript 코드와의 실행 환경 차이

## 해결 방법

```typescript
// apiClient.ts
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window === 'undefined') {
      // 서버 사이드 환경
      return config;
    } else {
      // 클라이언트 사이드 환경
      const cookies = parseCookies();
      const token = cookies.jwt;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// pages/profile.tsx
export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    if (!token) {
      return {
        redirect: {
          destination: '/signin?redirect=/profile',
          permanent: false,
        },
      };
    }

    const response = await getRequest<ProfileData>({
      url: API_ENDPOINTS.AUTH_ME,
      config: {
        headers: getAuthHeaders(context),
      },
    });
    // ... 나머지 코드
  } catch {
    // ... 에러 처리
  }
};
```

## 개선 효과

1. **환경 구분**

   - 서버/클라이언트 환경에 따른 적절한 토큰 처리
   - SSR 시 안전한 API 요청 처리
   - 환경별 최적화된 동작

2. **보안 강화**

   - 서버 환경에서의 불필요한 쿠키 접근 방지
   - 클라이언트 전용 기능의 서버 실행 방지
   - 환경별 적절한 보안 정책 적용

3. **에러 방지**

   - `window is not defined` 에러 방지
   - 서버 환경에서의 쿠키 접근 에러 방지
   - 안정적인 SSR 동작 보장

4. **서버 사이드 쿠키 접근**
   - `getServerSideProps`를 통한 안전한 쿠키 접근
   - 서버 사이드 API 요청 시 적절한 인증 정보 전달
   - Next.js의 특별한 컨텍스트 활용

## 주의사항

1. **환경 감지**

   - `typeof window` 체크는 가장 안정적인 방법
   - 다른 환경 감지 방법보다 신뢰성 높음
   - Next.js의 SSR 환경에서 잘 동작

2. **토큰 처리**

   - 서버 사이드에서는 다른 방식의 인증 고려
   - 클라이언트 사이드에서만 쿠키 사용
   - 환경별 적절한 인증 방식 선택

3. **성능**
   - 불필요한 환경 체크 최소화
   - 조건문으로 인한 성능 영향 최소화
   - 효율적인 토큰 처리 로직 구현

4. **서버 사이드 API 요청**
   - `getServerSideProps`에서만 쿠키 직접 접근
   - 일반 JavaScript 코드에서는 쿠키 접근 제한
   - 적절한 헤더 설정으로 인증 정보 전달
