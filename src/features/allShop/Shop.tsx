import Search from '@/shared/ui/Search';
import { useShopData } from '@/shared/hooks/useShopData';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import AllProduct from './AllProduct';
import FilterProduct from './FilterProduct';
import Pagination from './Pagination';
import { FilterParams } from '@/shared/types/shop';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const InnerContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  display: flex;
`;

export default function Shop() {
  const { data: shopData = { products: [], categories: [], totalPages: 0 } } =
    useShopData();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterParams: FilterParams) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, ...filterParams },
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleFilterChange({
      page: String(page),
    });
  };

  return (
    <Container>
      <Search />
      <InnerContainer>
        <ProductContainer>
          <FilterProduct onFilterChange={handleFilterChange} />
          <div>
            <AllProduct shopData={shopData} />
            {shopData.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={shopData.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </ProductContainer>
      </InnerContainer>
    </Container>
  );
}
