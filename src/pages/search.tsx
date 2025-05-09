import Navigation from '@/shared/ui/Navigation';
import Footer from '@/shared/ui/Footer';
import SearchResult from '@/features/search/SearchResult';
import { getRequest } from '@/shared/lib/apiClient';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { SearchResponse } from '@/shared/types/shop';

interface SearchProps {
  searchResult: SearchResponse;
}

export default function Search({ searchResult }: SearchProps) {
  return (
    <>
      <Navigation />
      <SearchResult searchResult={searchResult} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { keyword } = query;

  try {
    const response = await getRequest<SearchResponse>({
      url: API_ENDPOINTS.SEARCH,
      config: {
        params: { keyword },
      },
    });
    const searchResult = response.data;

    return {
      props: {
        searchResult,
      },
    };
  } catch (error) {
    console.error('검색 결과를 가져오는데 실패했습니다:', error);

    return {
      props: {
        searchResult: null,
      },
    };
  }
}
