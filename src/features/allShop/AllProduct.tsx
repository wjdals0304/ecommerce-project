import styled from 'styled-components';
import {ShopData} from '@/types/shop';
import AllProductContent from './AllProductContent';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  height: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  margin: 50px auto 25px 0px;
`;

interface AllProductProps {
  shopData: ShopData;
}
export default function AllProduct({shopData}: AllProductProps) {
  return (
    <Container>
      <Title>모든 상품</Title>
      <AllProductContent shopData={shopData} />
    </Container>
  );
}
