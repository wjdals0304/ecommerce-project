import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import rightIcon from 'public/images/home/rightIcon.svg';
import {HotProduct} from '@/types/home';
import HomeHotProductContent from './HomeHotProductContent';
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

const ViewAll = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`;

interface HomeHotProductProps {
  hotProducts: HotProduct[];
}

function HomeHotProduct({hotProducts}: HomeHotProductProps) {
  return (
    <Container>
      <Header>
        <Title>최신 전자제품</Title>
        <ViewAll>
          더보기 <Image src={rightIcon} alt="rightIcon" />
        </ViewAll>
      </Header>
      <HomeHotProductContent hotProducts={hotProducts} />
    </Container>
  );
}

export default HomeHotProduct;
