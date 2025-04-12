import Navigation from '@/shared/ui/Navigation';
import Footer from '@/shared/ui/Footer';
import Blog from '@/features/blog/Blog';
import { getRequest } from '@/shared/lib/apiClient';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { BlogResponse } from '@/shared/types/blog';

interface BlogPageProps {
  blogPosts: BlogResponse;
}

export default function BlogPage({ blogPosts }: BlogPageProps) {
  return (
    <>
      <Navigation />
      <Blog blogPosts={blogPosts} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const blogs = await getRequest<BlogResponse>({
      url: API_ENDPOINTS.BLOG,
    });
    const blogPosts = blogs.data;

    return {
      props: {
        blogPosts,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        error: 'Failed to fetch blog posts',
      },
    };
  }
}
