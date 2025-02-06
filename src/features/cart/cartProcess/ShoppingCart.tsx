import styled from 'styled-components';
import trashIcon from 'public/images/shop/trash.svg';
import Image from 'next/image';
import ShoppingCartTotal from './ShoppingCartTotal';

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
  padding: 15px;
  border-bottom: 1px solid #8e96a4;
  gap: 15px;
`;

const ProductDetailHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  width: 352px;
`;

const ProductPriceHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 10px;
`;

const ProductQTYHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
`;

const ProductSubTotalHeader = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
`;

const ProductEmptyHeader = styled.span`
  width: 44px;
  height: 44px;
`;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 352px;
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
`;

const ProductQTY = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const ProductSubTotal = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const TrashIconButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
`;

const TrashIconImage = styled(Image)`
  width: 22px;
  height: 22px;
`;

export default function ShoppingCart({onNextStep}: {onNextStep: () => void}) {
  return (
    <Container>
      <ProductContainer>
        <ProductHeader>
          <ProductDetailHeader>Product Details</ProductDetailHeader>
          <ProductPriceHeader>Price</ProductPriceHeader>
          <ProductQTYHeader>QTY</ProductQTYHeader>
          <ProductSubTotalHeader>Subtotal</ProductSubTotalHeader>
          <ProductEmptyHeader></ProductEmptyHeader>
        </ProductHeader>
        <ProductItemContainer>
          <ProductDetail>
            <ProductImage src="" alt="Image" width={72} height={72} />
            <ProductTitle>
              Axus Zens 123 Metalic Color I5 Ryzin Generation 10 16” FHD Laptop
            </ProductTitle>
          </ProductDetail>
          <ProductPrice>$100</ProductPrice>
          <ProductQTY>1</ProductQTY>
          <ProductSubTotal>$100</ProductSubTotal>
          <TrashIconButton>
            <TrashIconImage src={trashIcon} alt="trash" />
          </TrashIconButton>
        </ProductItemContainer>
      </ProductContainer>
      <ShoppingCartTotal onNextStep={onNextStep} />
    </Container>
  );
}
