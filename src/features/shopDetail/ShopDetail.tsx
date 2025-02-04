import styled from 'styled-components';
import ShopProductImage from './ShopProductImage';
import ShopProductDesc from './ShopProductDesc';
import SearchBar from '../../components/Search';

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

export default function ShopDetail() {
  return (
    <Container>
      <SearchBar />
      <InnerContainer>
        <ShopSection>Shop</ShopSection>
        <ShopProductContainer>
          <ShopProductImage />
          <ShopProductDesc />
        </ShopProductContainer>
      </InnerContainer>
    </Container>
  );
}
