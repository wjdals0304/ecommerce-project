import Search from '@/components/Search';
import styled from 'styled-components';
import SearchContent from './SearchContent';
import { SearchResponse } from '@/types/shop';
import { useState } from 'react';
import Pagination from '../allShop/Pagination';

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
  justify-content: center;
`;

const NoResult = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  font-size: 20px;
  font-weight: bold;
`;

function SearchResult({ searchResult }: { searchResult: SearchResponse }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { products, totalPages } = searchResult;

  return (
    <Container>
      <Search />
      <InnerContainer>
        <ProductContainer>
          {products.length > 0 ? (
            <SearchContent shopData={searchResult} />
          ) : (
            <NoResult>검색 결과가 없습니다.</NoResult>
          )}
        </ProductContainer>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </InnerContainer>
    </Container>
  );
}

export default SearchResult;
