import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import ShopDetail from '@/features/shopDetail/ShopDetail';
import { ShopDetail as ShopDetailType } from '@/shared/types/shop';
import { getRequest } from '@/shared/lib/apiClient';

interface ShopDetailPageProps {
  shopDetailData: ShopDetailType;
}

export default function ShopDetailPage({
  shopDetailData,
}: ShopDetailPageProps) {
  return (
    <>
      <Navigation />
      <ShopDetail shopDetailData={shopDetailData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { id } = params;
    const response = await getRequest<ShopDetailType>({
      url: `${API_ENDPOINTS.SHOP}/${id}`,
    });
    const shopDetailData = response.data;

    return {
      props: {
        shopDetailData,
      },
    };
  } catch (error) {
    console.error('상품 상세 데이터 조회 실패:', error);

    return {
      props: {
        shopDetailData: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
