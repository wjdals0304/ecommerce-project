import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllProduct from '@/features/allShop/Shop';
import {ShopData} from '@/types/shop';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSidePropsContext} from 'next';
import {
  createQueryKeyShopData,
  createQueryParams,
  fetchShopData,
} from '@/hooks/useShopData';

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <AllProduct />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const queryParams = createQueryParams(context.query);

  try {
    await queryClient.prefetchQuery({
      queryKey: createQueryKeyShopData(queryParams),
      queryFn: () => fetchShopData(queryParams),
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error('Shop data fetch error:', error);
    return {
      props: {
        dehydratedState: null,
      },
    };
  }
}
