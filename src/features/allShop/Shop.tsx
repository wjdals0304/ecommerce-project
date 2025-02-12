import styled from 'styled-components';
import Search from '@/components/Search';
import FilterProduct from './FilterProduct';
import AllProduct from './AllProduct';
import RelatedProduct from './RelatedProduct';
import {ShopData} from '@/types/shop';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const InnerContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  display: flex;
`;

interface ShopProps {
  shopData: ShopData;
}

export default function Shop({shopData: initialShopData}: ShopProps) {
  const router = useRouter();
  const [shopData, setShopData] = useState<ShopData>(initialShopData);
  const {categories} = shopData;

  const handleFilterChange = async (filterParams: any) => {
    try {
      const response = await getRequest(API_ENDPOINTS.SHOP, filterParams);
      setShopData(response.data);
      // URL 업데이트
      router.push(
        {
          pathname: router.pathname,
          query: filterParams,
        },
        undefined,
        {shallow: true},
      );
    } catch (error) {
      console.error('필터링 오류:', error);
    }
  };

  return (
    <Container>
      <Search />
      <InnerContainer>
        <ProductContainer>
          <FilterProduct
            categories={categories}
            onFilterChange={handleFilterChange}
          />
          <AllProduct shopData={shopData} />
        </ProductContainer>
      </InnerContainer>
    </Container>
  );
}
