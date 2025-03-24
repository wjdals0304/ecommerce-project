import {CartResponse} from '@/types/cart';
import styled from 'styled-components';
import ShoppingCartItem from '../shoppingCart/ShoppingCartItem';
import ShoppingCartTotal from '../shoppingCart/ShoppingCartTotal';
const Container = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-start;
`;

const ProductContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 777px;
  height: auto;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin: 0 15px;
  border-bottom: 1px solid #8e96a4;
`;

const ProductDetailHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px;
  flex: 1 0 352px;
`;

const ProductPriceHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px;
  flex: 1 0 133px;
`;

const ProductQTYHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px;
  flex: 1 0 81px;
`;

const ProductSubTotalHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px;
  flex: 1 0 133px;
`;

const ProductEmptyHeader = styled.span`
  flex: 1 0 47px;
  height: 44px;
  padding: 10px;
`;

export default function ShoppingCart({
  onNextStep,
  cart,
}: {
  onNextStep: () => void;
  cart: CartResponse;
}) {
  return (
    <Container>
      <ProductContainer>
        <ProductHeader>
          <ProductDetailHeader>상품 정보</ProductDetailHeader>
          <ProductPriceHeader>가격</ProductPriceHeader>
          <ProductQTYHeader>수량</ProductQTYHeader>
          <ProductSubTotalHeader>총 가격</ProductSubTotalHeader>
          <ProductEmptyHeader></ProductEmptyHeader>
        </ProductHeader>
        <ShoppingCartItem cart={cart} />
      </ProductContainer>
      <ShoppingCartTotal onNextStep={onNextStep} cart={cart} />
    </Container>
  );
}
