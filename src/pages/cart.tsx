import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import Cart from '@/features/cart/Cart';
import { queryKeyCart, useCartReload } from '@/shared/hooks/useCartReload';
import { CartResponse } from '@/shared/types/cart';
import { getRequest } from '@/shared/lib/apiClient';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  DehydratedState,
} from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

interface CartProps {
  dehydratedState: DehydratedState;
}

export default function CartPage({ dehydratedState }: CartProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <CartContent />
    </HydrationBoundary>
  );
}

function CartContent() {
  const { data: cart } = useCartReload(true);

  if (!cart) {
    return <div>장바구니 데이터를 불러오는 중입니다...</div>;
  }

  return (
    <>
      <Navigation />
      <Cart cart={cart} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    await queryClient.prefetchQuery({
      queryKey: queryKeyCart,
      queryFn: () =>
        getRequest<CartResponse>({
          url: API_ENDPOINTS.CART,
          config: {
            headers: {
              Authorization: `Bearer ${token}`,
              Cookie: context.req.headers.cookie ?? '',
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
    console.error('장바구니 데이터 로딩 실패:', error);

    return {
      redirect: {
        destination: '/signin?redirect=/cart',
        permanent: false,
      },
    };
  }
};
