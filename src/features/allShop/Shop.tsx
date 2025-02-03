import styled from 'styled-components';
import Search from '@/components/Search';
import FilterProduct from './FilterProduct';
import AllProduct from './AllProduct';
import RelatedProduct from './RelatedProduct';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const ProductContainer = styled.div`
  display: flex;
`;

export default function Shop() {
  return (
    <Container>
      <Search />
      <ProductContainer>
        <FilterProduct />
        <AllProduct />
      </ProductContainer>
      <RelatedProduct />
    </Container>
  );
}
