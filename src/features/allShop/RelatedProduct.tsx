import styled from 'styled-components';
import Image from 'next/image';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 50px 0 25px 0;
`;

const ProductContainer = styled.div`
  display: flex;
  max-width: 1240px;
  gap: 25px;
  margin: 25px auto 50px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 291px;
  height: auto;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
`;

const ProductImage = styled(Image)`
  width: 251px;
  height: 251px;
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
  margin-top: 25px;
`;

const ProductPrice = styled.span`
  font-size: 24px;
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

export default function RelatedProduct() {
  return (
    <Container>
      <Title>Related Product</Title>
      <ProductContainer>
        {[1, 2, 3, 4].map(item => (
          <ProductItem key={item}>
            <ImageContainer>
              <ProductImage src="" alt="Product" width={251} height={251} />
              <Rating>
                <Image src={starIcon} alt="star" width={18} height={18} />
                <span>5.0</span>
              </Rating>
              <Heart>
                <Image src={heartDarkIcon} alt="heart" width={18} height={18} />
              </Heart>
            </ImageContainer>
            <ProductTitle>Headset T50RP MK3N - Black and Red</ProductTitle>
            <Sold>200 item sold</Sold>
            <ProductPriceContainer>
              <ProductPrice>$100</ProductPrice>
              <BuyButton>Buy</BuyButton>
            </ProductPriceContainer>
          </ProductItem>
        ))}
      </ProductContainer>
    </Container>
  );
}
