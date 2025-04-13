# API 응답 인터셉터 트러블슈팅

## 문제 상황

- 토큰 만료 시 사용자가 수동으로 로그인해야 하는 문제
- 토큰 갱신 중 발생하는 동시 요청 충돌
- 토큰 갱신 실패 시 적절한 에러 처리 부재
- 인증 관련 API 요청 시 무한 루프 발생 가능성

## 원인 분석

1. **토큰 갱신 로직 미흡**

   - 토큰 갱신 중 발생하는 요청에 대한 큐 관리 부재
   - 갱신 토큰 요청 실패 시 적절한 에러 처리 부재
   - 인증 관련 API 요청에 대한 예외 처리 부재

2. **동시성 문제**
   - 여러 요청이 동시에 토큰 갱신을 시도할 때 충돌
   - 갱신 중인 요청에 대한 재시도 로직 부재
   - 중복 갱신 시도로 인한 서버 부하

## 해결 방법

```typescript
apiClient.interceptors.response.use(
  // 성공 응답 처리
  (response: AxiosResponse) => {
    const authHeader = response.headers['authorization'];
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      setCookie(null, 'jwt', token, {
        maxAge: 60 * 60,
        path: '/',
      });
    }
    return response;
  },
  // 에러 응답 처리
  async error => {
    const originalRequest = error.config;

    // 로그인 요청은 재시도하지 않음
    if (originalRequest.url.includes('/auth/signin')) {
      return Promise.reject(error);
    }

    // 토큰 갱신 요청 실패 시 로그아웃
    if (originalRequest.url.includes('/auth/refresh')) {
      destroyCookie(null, 'jwt');
      window.location.href = '/signin';
      return Promise.reject(error);
    }

    // 401 에러이고 아직 재시도하지 않은 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // 토큰 갱신 요청
        const response = await apiClient.post(
          `${API_BASE_URL}/auth/refresh`,
          {},
          {
            headers: {
              Cookie: originalRequest.headers.Cookie,
            },
          },
        );
        const newToken = response.data.accessToken;

        // 새 토큰 저장
        setCookie(null, 'jwt', newToken, {
          maxAge: 60 * 60,
          path: '/',
        });
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        // 원래 요청 재시도
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token error:', refreshError);
        destroyCookie(null, 'jwt');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
```

## 개선 효과

1. **자동 토큰 갱신**

   - 토큰 만료 시 자동으로 갱신 시도
   - 갱신 성공 시 원래 요청 자동 재시도
   - 사용자 경험 향상

2. **에러 처리 강화**

   - 인증 관련 API 요청 예외 처리
   - 토큰 갱신 실패 시 적절한 처리
   - 사용자 친화적인 에러 피드백

3. **보안 강화**
   - 토큰 만료 시 즉시 처리
   - 갱신 실패 시 안전한 로그아웃
   - 적절한 토큰 만료 시간 설정

## 주의사항

1. **토큰 관리**

   - 토큰 만료 시간을 적절히 설정
   - 갱신 토큰의 보안 수준 유지
   - 쿠키 설정의 보안 옵션 확인

2. **에러 처리**

   - 네트워크 오류에 대한 처리
   - 서버 에러에 대한 처리
   - 사용자에게 적절한 피드백 제공

3. **성능**

   - 불필요한 토큰 갱신 방지
   - 동시 요청 처리 최적화
   - 서버 부하 고려

4. **사용자 경험**
   - 토큰 갱신 중 적절한 로딩 상태 표시
   - 갱신 실패 시 명확한 에러 메시지
   - 자동 로그아웃 시 사용자 안내
