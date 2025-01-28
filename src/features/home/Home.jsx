import Search from './Search';
import HomeHeader from './components/HomeHeader';
import HomeCategory from './components/HomeCategory';
import HomeProme from './components/HomePromo';
import HomeBestSeller from './components/HomeBestSeller';
import HomeHotProduct from './components/HomeHotProduct';
import HomeBlog from './components/homeBlog';

function Home() {
  return (
    <div className="home-container">
      <Search />
      <HomeHeader />
      <HomeCategory />
      <HomeProme />
      <HomeBestSeller />
      <HomeHotProduct />
      <HomeBlog />
    </div>
  );
}

export default Home;
