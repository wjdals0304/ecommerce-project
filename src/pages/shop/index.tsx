import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllProduct from '@/features/allShop/Shop';
import {ShopData} from '@/types/shop';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';

interface ShopPageProps {
  shopData: ShopData;
}

export default function ShopPage({shopData}: ShopPageProps) {
  return (
    <>
      <Navigation />
      <AllProduct shopData={shopData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await getRequest<ShopData>({
      url: API_ENDPOINTS.SHOP_ALL,
    });
    const shopData = response.data;

    return {
      props: {
        shopData,
      },
    };
  } catch (error) {
    return {
      props: {
        shopData: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
