import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Cart from '@/features/cart/Cart';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {parseCookies} from 'nookies';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {CartResponse} from '@/types/cart';
import {GetServerSideProps} from 'next';

interface CartProps {
  cart: CartResponse;
}

export default function CartPage({cart}: CartProps) {
  const router = useRouter();

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      router.push({
        pathname: '/signin',
        query: {redirect: '/cart'},
      });
    }
  }, [router]);

  return (
    <>
      <Navigation />
      <Cart cart={cart} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
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

    const response = await getRequest<CartResponse>({
      url: API_ENDPOINTS.CART,
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
          Cookie: context.req.headers.cookie,
        },
      },
    });

    return {
      props: {
        cart: response.data,
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
