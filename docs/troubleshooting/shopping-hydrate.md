# 장바구니 하이드레이션 트러블슈팅

## 문제 상황

- 장바구니 데이터의 서버-클라이언트 동기화 문제
- 하이드레이션 불일치로 인한 화면 깜빡임
- React Query 캐시 관리 문제

## 하이드레이션 데이터 흐름

<img src="https://github.com/user-attachments/assets/901aa490-9ff4-42e9-97ff-53ad58afa275" alt="하이드레이션 데이터 흐름" width="100%" />

## 원인 분석

1. **하이드레이션 처리 구조**

```typescript
// pages/cart.tsx
export default function CartPage({ dehydratedState }: CartProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <CartContent />
    </HydrationBoundary>
  );
}
```

- `HydrationBoundary`를 사용하여 서버 데이터를 클라이언트에 전달
- `CartContent`에서 `useCartReload` 훅을 통해 데이터 접근

2. **데이터 프리페칭**

```typescript
// pages/cart.tsx
export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    if (!token) {
      return {
        redirect: {
          destination: '/signin?redirect=/cart',
          permanent: false,
        },
      };
    }

    await queryClient.prefetchQuery({
      queryKey: queryKeyCart,
      queryFn: () =>
        getRequest<CartResponse>({
          url: API_ENDPOINTS.CART,
          config: {
            headers: {
              Authorization: `Bearer ${token}`,
              Cookie: context.req.headers.cookie,
            },
          },
        }).then(res => res.data),
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/signin?redirect=/cart',
        permanent: false,
      },
    };
  }
};
```

- 서버 사이드에서 장바구니 데이터를 미리 가져옴
- 인증 토큰과 쿠키를 함께 전송하여 인증된 요청 보장
- 프리페치된 데이터를 `dehydrate`하여 클라이언트에 전달

3. **데이터 흐름**

```typescript
// features/cart/Cart.tsx
export default function Cart({ cart }: { cart: CartResponse }) {
  const { data: updatedCart } = useCartReload();
  const useCart = updatedCart || cart;
  // ...
}
```

- 서버에서 받은 초기 데이터(`cart`)와 클라이언트 데이터(`updatedCart`) 병합
- 데이터 업데이트 시 자동 동기화

4. **상품 삭제 처리**

```typescript
// features/cart/cartProcess/shoppingCart/ShoppingCartItem.tsx
const mutation = useMutation({
  mutationFn: (productId: number) => {
    return deleteRequest({
      url: `${API_ENDPOINTS.CART}/${productId}`,
    });
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['cart'] });
  },
});
```

- 쿼리 무효화로 인한 불필요한 리렌더링
- 낙관적 업데이트 미사용

## 개선 효과

1. **데이터 동기화**

   - 서버-클라이언트 데이터 일관성 유지
   - 초기 로딩 상태 최소화
   - 자동 데이터 업데이트

2. **사용자 경험**

   - 화면 깜빡임 최소화
   - 빠른 데이터 업데이트
   - 일관된 UI 상태

3. **에러 처리**
   - 인증 실패 시 적절한 리다이렉션
   - 데이터 로딩 실패 시 에러 처리
   - 사용자 친화적인 에러 메시지
