import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import rightIcon from 'public/images/home/rightIcon.svg';
import { FlashDeal } from '@/shared/types/home';
import HomePromoContent from './HomePromoContent';

const Container = styled.section`
  margin: 50px 0;
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

interface HomePromoProps {
  flashDeals: FlashDeal[];
}

function HomePromo({ flashDeals }: HomePromoProps) {
  return (
    <Container>
      <Header>
        <SaleGroup>
          <SaleGroupTitle>반짝 세일</SaleGroupTitle>
          <Timer>05:02:00</Timer>
        </SaleGroup>
        <ViewAll href="/shop">
          더보기
          <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
        </ViewAll>
      </Header>
      <HomePromoContent flashDeals={flashDeals} />
    </Container>
  );
}

export default HomePromo;
