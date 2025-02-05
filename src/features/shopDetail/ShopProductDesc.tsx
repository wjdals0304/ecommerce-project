import styled from 'styled-components';
import Image from 'next/image';
import starIcon from 'public/images/home/star.svg';
import QuantitySelector from './QuantitySelector';
import ShippingMethod from './ShippingMethod';
import ShopProductBuy from './ShopProductBuy';

const Container = styled.div`
  width: 595px;
  height: auto;
`;

const ProductTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

const ProductDiscountPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #56af2c;
`;

const ProductOriginalPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #8e96a4;
  text-decoration: line-through;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 25px;
`;

const ReviewCount = styled.span`
  font-size: 16px;
  color: #8e96a4;
`;

const ProductDesc = styled.p`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.5;
  color: #8e96a4;
  margin-top: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #8e96a4;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #8e96a4;
`;

const InfoItemTitle = styled.span`
  width: 112px;
  display: inline-block;
  color: #001c30;
`;

const InfoItem = styled.span`
  font-size: 16px;
  color: #8e96a4;
`;

export default function ShopProductDesc() {
  return (
    <Container>
      <ProductTitle>
        Axus Zens 123 Metalic Color I5 Ryzin Generation 10 16" FHD Laptop
      </ProductTitle>
      <ProductPriceContainer>
        <ProductDiscountPrice>$100.00</ProductDiscountPrice>
        <ProductOriginalPrice>$150.00</ProductOriginalPrice>
      </ProductPriceContainer>
      <RatingContainer>
        <Rating>
          <Image src={starIcon} alt="star" width={18} height={18} /> 5.0
        </Rating>
        <ReviewCount>20 Reviews</ReviewCount>
      </RatingContainer>
      <ProductDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
        aliquet dui. Donec maximus, magna id imperdiet sodales, risus elit
        varius enim... See More 
      </ProductDesc>
      <InfoContainer>
        <InfoItem>
          <InfoItemTitle>SKU:</InfoItemTitle>
          <span>HJ-3123IL</span>
        </InfoItem>
        <InfoItem>
          <InfoItemTitle>Category:</InfoItemTitle>
          <span>Computer, Laptop</span>
        </InfoItem>
        <InfoItem>
          <InfoItemTitle>Tags:</InfoItemTitle>
          <span>Bluetooth, Laptop, Monitor, Speaker</span>
        </InfoItem>
      </InfoContainer>
      <QuantitySelector />
      <ShippingMethod />
      <ShopProductBuy />
    </Container>
  );
}
