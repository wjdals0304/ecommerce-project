import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bagIcon from 'public/images/home/bag.svg';
import heartDarkIcon from 'public/images/home/heartDark.svg';
import rightIcon from 'public/images/home/rightIcon.svg';
import {FlashDeal} from '@/types/home';

const Container = styled.section`
  margin: 50px 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SaleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SaleGroupTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Timer = styled.div`
  background-color: #f9d849;
  color: black;
  padding: 5px 10px;
  border-radius: 25px;
  font-weight: bold;
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

const Products = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

const Product = styled.div`
  display: flex;
  gap: 25px;
  border-radius: 15px;
  padding: 25px;
  width: 100%;

  &:nth-child(1) {
    background-color: #fff5e6;
  }
  &:nth-child(2) {
    background-color: #eeedf1;
  }
  &:nth-child(3) {
    background-color: #d2f1ca;
  }
`;

const ProductImage = styled.div`
  width: 149px;
  height: 200px;
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const OriginalPrice = styled.span`
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
`;

const SalePrice = styled.span`
  color: #1a1a1a;
  font-weight: bold;
  font-size: 18px;
`;

const Availability = styled.div`
  color: #666;
  margin-bottom: 10px;
`;

const Available = styled.span`
  color: #4caf50;
  font-weight: bold;
`;

const ProgressContainer = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffa500, #ffd700);
  transition: width 0.3s ease;
`;

const ItemsSold = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AddToCart = styled.button`
  flex: 1;
  padding: 10px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
`;

const Wishlist = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function HomePromo({flashDeals}: {flashDeals: FlashDeal[]}) {
  return (
    <Container>
      <Header>
        <SaleGroup>
          <SaleGroupTitle>반짝 세일</SaleGroupTitle>
          <Timer>05:02:00</Timer>
        </SaleGroup>
        <ViewAll href="#">
          더보기
          <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
        </ViewAll>
      </Header>
      <Products>
        {flashDeals.map(flashDeal => (
          <Product key={flashDeal.id}>
            <ProductImage>
              <Image
                src={flashDeal.images[0]}
                alt={flashDeal.name}
                width={149}
                height={200}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>{flashDeal.name}</ProductTitle>
              <PriceContainer>
                <OriginalPrice>{flashDeal.originalPrice}</OriginalPrice>
                <SalePrice>{flashDeal.price}</SalePrice>
              </PriceContainer>
              <Availability>
                재고: <Available>{flashDeal.stock}</Available>
              </Availability>
              <ProgressContainer>
                <ProgressBar>
                  <ProgressFill>
                    <ItemsSold>{flashDeal.soldCount}개 판매</ItemsSold>
                  </ProgressFill>
                </ProgressBar>
              </ProgressContainer>
              <ButtonGroup>
                <AddToCart>
                  <Image src={bagIcon} alt="bag" width={16} height={16} />
                  장바구니
                </AddToCart>
                <Wishlist>
                  <Image
                    src={heartDarkIcon}
                    alt="heart"
                    width={16}
                    height={16}
                  />
                </Wishlist>
              </ButtonGroup>
            </ProductInfo>
          </Product>
        ))}
      </Products>
    </Container>
  );
}

export default HomePromo;
