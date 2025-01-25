import Search from './Search';
import HomeHeader from './components/HomeHeader';
import HomeCategory from './components/HomeCategory';
import HomeProme from './components/HomePromo';
import HomeBestSeller from './components/HomeBestSeller';
import HomeHotProduct from './components/HomeHotProduct';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Search />
      <HomeHeader />
      <HomeCategory />
      <HomeProme />
      <HomeBestSeller />
      <HomeHotProduct />
    </div>
  );
}

export default Home;
