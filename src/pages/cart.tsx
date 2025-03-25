import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { API_ENDPOINTS } from '@/config/apiEndPoints';
import Cart from '@/features/cart/Cart';
import { queryKeyCart, useCartReload } from '@/hooks/useCartReload';
import { CartResponse } from '@/types/cart';
import { getRequest } from '@/utils/apiClient';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

interface CartProps {
  dehydratedState: any;
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
    console.error('장바구니 데이터 로딩 실패:', error);

    return {
      redirect: {
        destination: '/signin?redirect=/cart',
        permanent: false,
      },
    };
  }
};
