import {useRouter} from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShopDetail from '@/features/shopDetail/ShopDetail';

export default function BlogPage() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <Navigation />
      <ShopDetail />
      <Footer />
    </>
  );
}
