import {useRouter} from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetail from '@/features/blogDetail/BlogDetail';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {BlogDetail as BlogDetailType} from '@/types/blog';

interface BlogPageProps {
  blogDetailData: BlogDetailType;
}

export default function BlogPage({blogDetailData}: BlogPageProps) {
  return (
    <>
      <Navigation />
      <BlogDetail blogDetailData={blogDetailData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({params}: {params: {id: string}}) {
  const {id} = params;

  try {
    const blog = await getRequest(`${API_ENDPOINTS.BLOG}/${id}`);
    const blogDetailData: BlogDetailType = blog.data;

    return {
      props: {blogDetailData},
    };
  } catch (error) {
    console.error('블로그 데이터 조회 실패:', error);
    return {
      props: {blog: null},
    };
  }
}
