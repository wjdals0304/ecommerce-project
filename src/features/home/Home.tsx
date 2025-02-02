import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import HomeHeader from './components/HomeHeader';
import HomeCategory from './components/HomeCategory';
import HomeProme from './components/HomePromo';
import HomeBestSeller from './components/HomeBestSeller';
import HomeHotProduct from './components/HomeHotProduct';
import HomeBlog from './components/homeBlog';

const Container = styled.div`
  background-color: #f5f7f8;
  border: 1px solid transparent;
`;

function Home() {
  return (
    <Container>
      <Search />
      <HomeHeader />
      <HomeCategory />
      <HomeProme />
      <HomeBestSeller />
      <HomeHotProduct />
      <HomeBlog />
    </Container>
  );
}

export default Home;
