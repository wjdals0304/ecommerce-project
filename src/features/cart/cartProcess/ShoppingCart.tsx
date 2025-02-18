import styled from 'styled-components';
import trashIcon from 'public/images/shop/trash.svg';
import Image from 'next/image';
import ShoppingCartTotal from './shoppingCart/ShoppingCartTotal';
import {CartResponse} from '@/types/cart';
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

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  flex: 1 0 352px;
`;

const ProductImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 15px;
  object-fit: cover;
  background-color: #d7d7d7;
`;

const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #56af2c;
  flex: 1 0 133px;
  padding: 10px;
`;

const ProductQTY = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
  flex: 1 0 81px;
  padding: 10px;
`;

const ProductSubTotal = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
  flex: 1 0 133px;
  padding: 10px;
`;

const TrashIconButton = styled.button`
  flex: 1 0 47px;
  height: 44px;
  border: none;
  background-color: transparent;
  padding: 10px;
`;

const TrashIconImage = styled(Image)`
  width: 22px;
  height: 22px;
`;

export default function ShoppingCart({
  onNextStep,
  cart,
}: {
  onNextStep: () => void;
  cart: CartResponse;
}) {
  const {items, user} = cart;
  const {fullName} = user;
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

        {items.map(({product, quantity}) => {
          const {name, price, images} = product;
          return (
            <ProductItemContainer>
              <ProductDetail>
                <ProductImage
                  src={images[0]}
                  alt="Image"
                  width={72}
                  height={72}
                />
                <ProductTitle>{name}</ProductTitle>
              </ProductDetail>
              <ProductPrice>{price.toLocaleString()}원</ProductPrice>
              <ProductQTY>{quantity}</ProductQTY>
              <ProductSubTotal>
                {(price * quantity).toLocaleString()}원
              </ProductSubTotal>
              <TrashIconButton>
                <TrashIconImage src={trashIcon} alt="trash" />
              </TrashIconButton>
            </ProductItemContainer>
          );
        })}
      </ProductContainer>
      <ShoppingCartTotal onNextStep={onNextStep} cart={cart} />
    </Container>
  );
}
