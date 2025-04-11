import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import Shop from '@/features/allShop/Shop';
import {
  createQueryKeyShopData,
  createQueryParams,
  fetchShopData,
} from '@/hooks/useShopData';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

export default function ShopPage() {
  return (
    <>
      <Navigation />
      <Shop />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const queryParams = createQueryParams(context.query);

  try {
    await queryClient.fetchQuery({
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
