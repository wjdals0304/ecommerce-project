import styled from 'styled-components';
import Image from 'next/image';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 100px 25px 25px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
  padding: 50px 25px 25px 0px;
`;

const ProductContainer = styled.div`
  display: flex;
  max-width: 898px;
  flex-wrap: wrap;
  gap: 18.5px;
  padding: 25px auto 25px 25px;
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

export default function AllProduct() {
  return (
    <Container>
      <Title>All Product</Title>
      <ProductContainer>
        {Array.from({length: 12}).map((_, index) => (
          <ProductItem key={index}>
            <ImageContainer>
              <ProductImage src="" alt="" width={250} height={250} />
              <Rating>
                <Image src={starIcon} alt="star" width={18} height={18} />
                <span>5.0</span>
              </Rating>
              <Heart>
                <Image src={heartDarkIcon} alt="heart" width={18} height={18} />
              </Heart>
            </ImageContainer>
            <ProductTitle>Product Name</ProductTitle>
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
