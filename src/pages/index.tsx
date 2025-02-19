import Navigation from '@/components/Navigation';
import Home from '@/features/home/Home';
import Footer from '@/components/Footer';
import {getRequest} from '@/utils/apiClient';
import {API_BASE_URL, API_ENDPOINTS} from '@/config/ApiEndPoints';
import {HomeData} from '@/types/home';
import {parseCookies} from 'nookies';

export default function HomePage({homeData}: {homeData: HomeData}) {
  return (
    <>
      <Navigation />
      <Home homeData={homeData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    const token = cookies.jwt;

    const response = await getRequest<HomeData>({
      url: API_ENDPOINTS.HOME,
    });
    const homeData = response.data;

    return {
      props: {
        homeData,
      },
    };
  } catch (error) {
    return {
      props: {
        homeData: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
