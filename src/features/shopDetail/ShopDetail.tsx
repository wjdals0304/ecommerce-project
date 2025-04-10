import { API_ENDPOINTS } from '@/config/apiEndPoints';
import {
  Review,
  ReviewResponse,
  ShopDetail as ShopDetailType,
} from '@/types/shop';
import { getRequest } from '@/utils/apiClient';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/Search';
import DetailProductTab from './DetailProductTab/DetailProductTab';
import { ShopDetailTabType } from './DetailProductTab/TabContent';
import ShopProductDesc from './ShopProductDesc';
import ShopProductImage from './ShopProductImage';

const Container = styled.div`
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const ShopProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  margin: 50px auto;
`;

interface ShopDetailProps {
  shopDetailData: ShopDetailType;
}

export default function ShopDetail({
  shopDetailData: initialShopDetailData,
}: ShopDetailProps) {
  const router = useRouter();
  const [shopDetailData] = useState<ShopDetailType>(initialShopDetailData);
  const [reviews, setReviews] = useState<Review[]>([]);

  const { product, specifications, descriptions } = shopDetailData;
  const { images } = product;

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
      const response = await getRequest<ReviewResponse>({
        url: `${API_ENDPOINTS.SHOP}/${product.id}`,
        config: {
          params: {
            tab: tab,
          },
        },
      });
      const reviewResponse = response.data;

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
        { shallow: true },
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
