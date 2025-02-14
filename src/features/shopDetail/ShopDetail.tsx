import styled from 'styled-components';
import ShopProductImage from './ShopProductImage';
import ShopProductDesc from './ShopProductDesc';
import DetailProductTab from './DetailProductTab/DetailProductTab';
import SearchBar from '../../components/Search';
import {Review, ShopDetail as ShopDetailType} from '@/types/shop';
import {ShopDetailTabType} from './DetailProductTab/TabContent';
import {useState} from 'react';
import router, {useRouter} from 'next/router';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {ReviewResponse} from '@/types/shop';

const Container = styled.div`
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const ShopSection = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 15px auto;
  display: block;
`;

const ShopProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 50px auto;
`;

interface ShopDetailProps {
  shopDetailData: ShopDetailType;
}

export default function ShopDetail({
  shopDetailData: initialShopDetailData,
}: ShopDetailProps) {
  const router = useRouter();
  const [shopDetailData, setShopDetailData] = useState<ShopDetailType>(
    initialShopDetailData,
  );
  const [reviews, setReviews] = useState<Review[]>([]);

  const {product, specifications, descriptions} = shopDetailData;
  const {images} = product;

  const [activeTab, setActiveTab] = useState<ShopDetailTabType>(
    ShopDetailTabType.Description,
  );

  const handleTabClick = async (tab: ShopDetailTabType) => {
    if (
      tab === ShopDetailTabType.Description ||
      tab === ShopDetailTabType.Specification
    ) {
      setActiveTab(tab);
      return;
    }
    // 리뷰 탭일 경우 데이터 가져오기
    try {
      const response = await getRequest(`${API_ENDPOINTS.SHOP}/${product.id}`, {
        tab: tab,
      });
      const reviewResponse: ReviewResponse = response.data;
      setReviews(reviewResponse.reviews);

      router.push(
        {
          pathname: router.pathname,
          query: {
            id: product.id,
            tab: tab,
          },
        },
        undefined,
        {shallow: true},
      );

      setActiveTab(tab);
    } catch (error) {
      console.error('탭 클릭 오류:', error);
    }
  };

  return (
    <Container>
      <SearchBar />
      <InnerContainer>
        <ShopProductContainer>
          <ShopProductImage images={images} />
          <ShopProductDesc shopDetailData={shopDetailData} />
        </ShopProductContainer>
        <DetailProductTab
          activeTab={activeTab}
          onTabClick={handleTabClick}
          reviews={reviews}
          specifications={specifications}
          descriptions={descriptions}
        />
      </InnerContainer>
    </Container>
  );
}
