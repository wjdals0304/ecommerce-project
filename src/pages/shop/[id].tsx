import {useRouter} from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShopDetail from '@/features/shopDetail/ShopDetail';
import {ShopDetail as ShopDetailType} from '@/types/shop';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';

interface ShopDetailPageProps {
  shopDetailData: ShopDetailType;
}

export default function ShopDetailPage({shopDetailData}: ShopDetailPageProps) {
  return (
    <>
      <Navigation />
      <ShopDetail shopDetailData={shopDetailData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({params}) {
  try {
    const {id} = params;
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
