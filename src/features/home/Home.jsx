import Search from "./Search"
import HomeHeader from "./components/HomeHeader";
import HomeCategory from "./components/HomeCategory";
import HomeProme from "./components/HomePromo";

function Home() {
    return ( 
        <div>
            <Search />  
            <HomeHeader />     
            <HomeCategory /> 
            <HomeProme />
        </div>
    )
}

export default Home;