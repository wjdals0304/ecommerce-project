import styled from 'styled-components';
import Image from 'next/image';
import starIcon from 'public/images/home/star.svg';
import QuantitySelector from './QuantitySelector';
import ShippingMethod from './ShippingMethod';
import ShopProductBuy from './ShopProductBuy';
import {ShopDetail as ShopDetailType} from '@/types/shop';
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

export default function ShopProductDesc({
  shopDetailData,
}: {
  shopDetailData: ShopDetailType;
}) {
  const {product, descriptions, specifications} = shopDetailData;

  const {
    id,
    name,
    price,
    originalPrice,
    rating,
    soldCount,
    description,
    stock,
    warranty,
    categoryId,
    reviewCount,
  } = product;

  return (
    <Container>
      <ProductTitle>{name}</ProductTitle>
      <ProductPriceContainer>
        <ProductDiscountPrice>{price.toLocaleString()}원</ProductDiscountPrice>
        <ProductOriginalPrice>
          {originalPrice.toLocaleString()}원
        </ProductOriginalPrice>
      </ProductPriceContainer>
      <RatingContainer>
        <Rating>
          <Image src={starIcon} alt="star" width={18} height={18} /> {rating}
        </Rating>
        <ReviewCount>{reviewCount} 리뷰</ReviewCount>
      </RatingContainer>
      <ProductDesc>{description}</ProductDesc>
      <QuantitySelector price={price} />
      <ShippingMethod />
      <ShopProductBuy productId={id.toString()} />
    </Container>
  );
}
