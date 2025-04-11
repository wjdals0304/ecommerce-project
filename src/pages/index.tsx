import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import Home from '@/features/home/Home';
import { HomeData } from '@/shared/types/home';
import { getRequest } from '@/shared/lib/apiClient';

export default function HomePage({ homeData }: { homeData: HomeData }) {
  return (
    <>
      <Navigation />
      <Home homeData={homeData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await getRequest<HomeData>({
      url: API_ENDPOINTS.HOME,
    });
    const homeData = response.data;

    return {
      props: {
        homeData,
      },
    };
  } catch {
    return {
      props: {
        homeData: null,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
}
