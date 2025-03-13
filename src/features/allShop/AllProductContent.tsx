import {Product, ShopData} from '@/types/shop';
import Image from 'next/image';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import {API_ENDPOINTS} from '@/config/apiEndPoints';

interface AllProductProps {
  shopData: ShopData;
}

export default function AllProductContent({shopData}: AllProductProps) {
  const {products} = shopData;
  return (
    <ProductContainer>
      {products.map(({id, name, price, soldCount, images}) => (
        <ProductItem
          key={id}
          onClick={() => router.push(`${API_ENDPOINTS.SHOP_DETAIL}/${id}`)}
        >
          <ImageContainer>
            <ProductImage src={images[0]} alt={name} width={250} height={250} />
            <Rating>
              <Image src={starIcon} alt="star" width={18} height={18} />
              <span>5.0</span>
            </Rating>
            <Heart>
              <Image src={heartDarkIcon} alt="heart" width={18} height={18} />
            </Heart>
          </ImageContainer>
          <ProductTitle>{name}</ProductTitle>
          <Sold>{soldCount}개 판매</Sold>
          <ProductPriceContainer>
            <ProductPrice>{price.toLocaleString('ko-KR')}원</ProductPrice>
            <BuyButton>구매</BuyButton>
          </ProductPriceContainer>
        </ProductItem>
      ))}
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18.5px;
  margin: 0px auto 25px 0px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 210px;
  height: 324px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 14.5px;
  cursor: pointer;
`;

const ProductImage = styled(Image)`
  width: 181px;
  height: 181px;
  object-fit: cover;
  border-radius: 7.25px;
  background-color: #d7d7d7;
  display: block;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const Sold = styled.span`
  font-size: 12px;
  font-weight: medium;
  color: #8e96a4;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18.5px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ee9322;
`;

const BuyButton = styled.button`
  width: 52px;
  height: 28.5px;
  background-color: #001c30;
  color: #fff;
  border: none;
  border-radius: 18.5px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Rating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 25px;
`;

const Heart = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  padding: 5px 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 38px;
  height: 38px;
`;
