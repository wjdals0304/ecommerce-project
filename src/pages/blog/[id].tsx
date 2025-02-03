import {useRouter} from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogDetail from '@/features/blogDetail/BlogDetail';

export default function BlogPage() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <Navigation />
      <BlogDetail />
      <Footer />
    </>
  );
}
