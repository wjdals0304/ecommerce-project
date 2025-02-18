import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Cart from '@/features/cart/Cart';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {parseCookies} from 'nookies';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {CartResponse} from '@/types/cart';

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

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    const response = await getRequest<CartResponse>(
      API_ENDPOINTS.CART,
      {},
      token,
    );
    const cart = response.data;
    return {props: {cart}};
  } catch (error) {
    return {
      props: {
        cart: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
