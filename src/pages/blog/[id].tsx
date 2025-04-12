import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import BlogDetail from '@/features/blogDetail/BlogDetail';
import { BlogDetail as BlogDetailType } from '@/shared/types/blog';
import { getRequest } from '@/shared/lib/apiClient';

interface BlogPageProps {
  blogDetailData: BlogDetailType;
}

export default function BlogPage({ blogDetailData }: BlogPageProps) {
  return (
    <>
      <Navigation />
      <BlogDetail blogDetailData={blogDetailData} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const blog = await getRequest<BlogDetailType>({
      url: `${API_ENDPOINTS.BLOG}/${id}`,
    });
    const blogDetailData = blog.data;

    return {
      props: { blogDetailData },
    };
  } catch (error) {
    console.error('블로그 데이터 조회 실패:', error);

    return {
      props: { blog: null },
    };
  }
}
