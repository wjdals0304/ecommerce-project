import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Search';
import HomeHeader from './components/HomeHeader';
import HomeCategory from './components/HomeCategory';
import HomeProme from './components/HomePromo';
import HomeBestSeller from './components/HomeBestSeller';
import HomeHotProduct from './components/HomeHotProduct';
import HomeBlog from './components/HomeBlog';
import { HomeData } from '../../types/home';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

const HomeContainer = styled.div`
  background-color: #f5f7f8;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
`;

interface HomeProps {
  homeData: HomeData;
}

function Home({ homeData }: HomeProps) {
  const {
    flashDeals,
    bestSellers,
    hotProducts,
    latestBlogs,
    eventBanners,
    categories,
  } = homeData;

  return (
    <Container>
      <Search />
      <HomeContainer>
        <HomeHeader eventBanners={eventBanners} />
        <HomeCategory categories={categories} />
        <HomeProme flashDeals={flashDeals} />
        <HomeBestSeller bestSellers={bestSellers} />
        <HomeHotProduct hotProducts={hotProducts} />
        <HomeBlog latestBlogs={latestBlogs} />
      </HomeContainer>
    </Container>
  );
}

export default Home;
