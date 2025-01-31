import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import rightIcon from 'public/images/home/rightIcon.svg';
import starIcon from 'public/images/home/star.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';

const Container = styled.div`
  margin: 20px 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 25px;
  border-radius: 15px;
  height: 447px;
`;

const ProductItem = styled.div`
  width: 25%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled(Image)`
  background-color: #d7d7d7;
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
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

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const ItemSold = styled.span`
  font-size: 14px;
  color: #888888;
  margin-top: 5px;
`;

const BuySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ee9322;
`;

const BuyButton = styled.button`
  background-color: #001c30;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  width: fit-content;
`;

const ViewAll = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;

function HomeHotProduct() {
  return (
    <Container>
      <Header>
        <Title>Hot News Electronics</Title>
        <ViewAll>
          View All <Image src={rightIcon} alt="rightIcon" />
        </ViewAll>
      </Header>
      <Content>
        <ProductItem>
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

          <ItemContent>
            <ItemTitle>Headset T50RP MK3N - Black And Red</ItemTitle>
            <ItemSold>200 Item sold</ItemSold>
            <BuySection>
              <Price>$100</Price>
              <BuyButton>Buy</BuyButton>
            </BuySection>
          </ItemContent>
        </ProductItem>
        <ProductItem>
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

          <ItemContent>
            <ItemTitle>Headset T50RP MK3N - Black And Red</ItemTitle>
            <ItemSold>200 Item sold</ItemSold>
            <BuySection>
              <Price>$100</Price>
              <BuyButton>Buy</BuyButton>
            </BuySection>
          </ItemContent>
        </ProductItem>
        <ProductItem>
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

          <ItemContent>
            <ItemTitle>Headset T50RP MK3N - Black And Red</ItemTitle>
            <ItemSold>200 Item sold</ItemSold>
            <BuySection>
              <Price>$100</Price>
              <BuyButton>Buy</BuyButton>
            </BuySection>
          </ItemContent>
        </ProductItem>
        <ProductItem>
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

          <ItemContent>
            <ItemTitle>Headset T50RP MK3N - Black And Red</ItemTitle>
            <ItemSold>200 Item sold</ItemSold>
            <BuySection>
              <Price>$100</Price>
              <BuyButton>Buy</BuyButton>
            </BuySection>
          </ItemContent>
        </ProductItem>
      </Content>
    </Container>
  );
}

export default HomeHotProduct;
