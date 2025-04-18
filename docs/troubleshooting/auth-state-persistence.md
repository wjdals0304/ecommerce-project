# 인증 상태 유지 트러블슈팅

## 문제 상황

- 로그인 후 새로고침 시 인증 상태와 사용자 데이터가 초기화되는 문제 발생
- `Navigation.tsx`에서 `isAuthenticated`와 `user`가 `false`와 `null`로 표시됨

## 원인 분석

1. **상태 관리 문제**

   - 로그인 시 `setAuth`로 상태를 설정했지만, 페이지 새로고침 시 상태가 초기화됨
   - 클라이언트 사이드 상태만으로는 페이지 새로고침 시 데이터 유지 불가

2. **쿠키 활용 미흡**
   - 기존에는 인증 상태만 쿠키에 저장하고 사용자 데이터는 저장하지 않음
   - `cookieUtils.ts`에서 `setAuthCookie` 함수가 사용자 데이터를 저장하지 않음

## 해결 방법

1. **쿠키 유틸리티 개선**

   ```typescript
   // cookieUtils.ts 수정
   export const setAuthCookie = (isAuthenticated: boolean, userData?: UserData) => {
     setCookie(null, 'isAuthenticated', String(isAuthenticated), {
       maxAge: 30 * 24 * 60 * 60,
       path: '/',
     });

     if (userData) {
       setCookie(null, 'userData', JSON.stringify(userData), {
         maxAge: 30 * 24 * 60 * 60,
         path: '/',
       });
     }
   };

   export const getUserDataCookie = () => {
     const cookies = parseCookies();
     const userData = cookies.userData;
     return userData ? JSON.parse(userData) : null;
   };
   ```

2. **로그인 로직 수정**

   ```typescript
   // SignInEmail.tsx 수정
   setAuth(true, response.data);
   setAuthCookie(true, response.data);
   ```

3. **네비게이션 컴포넌트 수정**
   ```typescript
   // Navigation.tsx 수정
   useEffect(() => {
     const isAuth = getAuthCookie();
     const userData = getUserDataCookie();

     if (isAuth && userData) {
       setAuth(true, userData);
     }
   }, [setAuth]);
   ```

## 개선 효과

1. **상태 지속성**

   - 페이지 새로고침 시에도 로그인 상태와 사용자 데이터가 유지됨
   - 쿠키를 통해 서버 사이드에서도 인증 상태 확인 가능
