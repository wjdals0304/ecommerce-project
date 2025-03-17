import styled from 'styled-components';
import Search from '@/components/Search';
import FilterProduct, {FilterProductEnum} from './FilterProduct';
import AllProduct from './AllProduct';
import {ShopData} from '@/types/shop';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import Pagination from './Pagination';
import {WarrentyOptions} from './Warrenty';
import {useQuery} from '@tanstack/react-query';
import {useShopData} from '@/hooks/useShopData';

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

export default function Shop() {
  const {data: shopData} = useShopData();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWarrenty, setSelectedWarrenty] = useState<string>(
    WarrentyOptions.ALL.value,
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(
    FilterProductEnum.ALL,
  );
  const [priceValue, setPriceValue] = useState(9999999);

  useEffect(() => {
    const {categoryId} = router.query;
    if (categoryId) {
      setSelectedCategory(Number(categoryId));
    }
  }, [router.query]);

  const handleFilterChange = async (filterParams: any) => {
    try {
      router.push({
        pathname: router.pathname,
        query: filterParams,
      });
    } catch (error) {
      console.error('필터링 오류:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
              totalPages={shopData.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </ProductContainer>
      </InnerContainer>
    </Container>
  );
}
