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

  // useEffect(() => {
  //   const {categoryId} = router.query;
  //   if (categoryId) {
  //     setSelectedCategory(Number(categoryId));
  //   }
  // }, [router.query]);

  const handleFilterChange = (filterParams: any) => {
    router.push({
      pathname: router.pathname,
      query: {...router.query, ...filterParams},
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
