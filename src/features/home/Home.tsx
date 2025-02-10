import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Search';
import HomeHeader from './components/HomeHeader';
import HomeCategory from './components/HomeCategory';
import HomeProme from './components/HomePromo';
import HomeBestSeller from './components/HomeBestSeller';
import HomeHotProduct from './components/HomeHotProduct';
import HomeBlog from './components/homeBlog';
import {HomeData} from '../../types/home';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

function Home({homeData}: {homeData: HomeData}) {
  return (
    <Container>
      <Search />
      <HomeHeader />
      <HomeCategory />
      <HomeProme flashDeals={homeData.flashDeals} />
      <HomeBestSeller bestSellers={homeData.bestSellers} />
      <HomeHotProduct hotProducts={homeData.hotProducts} />
      <HomeBlog blog={homeData.latestBlogs} />
    </Container>
  );
}

export default Home;
