// src/pages/shop/[category].tsx

import {GetServerSidePropsContext} from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllProduct from '@/features/allShop/Shop';
import {ShopData} from '@/types/shop';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {WarrentyOptions} from '@/features/allShop/Warrenty';
import {
  createQueryKeyShopData,
  createQueryParams,
  fetchShopData,
} from '@/hooks/useShopData';
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query';

interface ShopPageProps {
  dehydratedState: any;
}

export default function ShopPage({dehydratedState}: ShopPageProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Navigation />
      <AllProduct />
      <Footer />
    </HydrationBoundary>
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
    return {
      props: {
        dehydratedState: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
