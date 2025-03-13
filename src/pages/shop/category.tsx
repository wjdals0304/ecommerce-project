// src/pages/shop/[category].tsx

import {GetServerSideProps} from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AllProduct from '@/features/allShop/Shop';
import {ShopData} from '@/types/shop';
import {getRequest} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {WarrentyOptions} from '@/features/allShop/Warrenty';

interface ShopPageProps {
  shopData: ShopData;
  categoryId: string;
}

export default function ShopPage({shopData}: ShopPageProps) {
  return (
    <>
      <Navigation />
      <AllProduct shopData={shopData} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {categoryId} = context.query;

  try {
    const response = await getRequest<ShopData>({
      url: API_ENDPOINTS.SHOP,
      config: {
        params: {
          categoryId: categoryId,
          page: '1',
          warranty: WarrentyOptions.ALL.value,
          priceMin: '0',
          priceMax: '9999999',
        },
      },
    });
    const shopData = response.data;

    return {
      props: {
        shopData,
        categoryId: categoryId,
      },
    };
  } catch (error) {
    return {
      props: {
        shopData: null,
        categoryId: categoryId,
        error: '데이터를 가져오는데 실패했습니다.',
      },
    };
  }
};
