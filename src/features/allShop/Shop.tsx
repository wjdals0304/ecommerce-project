import styled from 'styled-components';
import Search from '@/components/Search';
import FilterProduct, {FilterProductEnum} from './FilterProduct';
import AllProduct from './AllProduct';
import RelatedProduct from './RelatedProduct';
import {ShopData} from '@/types/shop';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import Pagination from './Pagination';
import {WarrentyOptions} from './Warrenty';

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
  const [shopData, setShopData] = useState(initialShopData);
  const {categories, totalPages} = shopData;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWarrenty, setSelectedWarrenty] = useState<string>(
    WarrentyOptions.ALL.value,
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(
    FilterProductEnum.ALL,
  );
  const [priceValue, setPriceValue] = useState(9999999);

  const handleFilterChange = async (filterParams: any) => {
    try {
      const response = await getRequest<ShopData>({
        url: API_ENDPOINTS.SHOP,
        config: {
          params: filterParams,
        },
      });
      setShopData(response.data);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지 변경 시 API 호출
    handleFilterChange({
      page: String(page),
      categoryId: String(selectedCategory),
      warranty: selectedWarrenty,
      priceMin: String(0),
      priceMax: String(priceValue),
    });
  };

  return (
    <Container>
      <Search />
      <InnerContainer>
        <ProductContainer>
          <FilterProduct
            categories={categories}
            onFilterChange={handleFilterChange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedWarrenty={selectedWarrenty}
            setSelectedWarrenty={setSelectedWarrenty}
            priceValue={priceValue}
            setPriceValue={setPriceValue}
          />
          <div>
            <AllProduct shopData={shopData} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </ProductContainer>
      </InnerContainer>
    </Container>
  );
}
