import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {ShippingResponse} from '@/types/order';
import {ShopData} from '@/types/shop';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';

interface ShopDataParams {
  page: string;
  categoryId: string;
  warranty: string;
  priceMin: string;
  priceMax: string;
}

export const createQueryKeyShopData = (params: ShopDataParams) => {
  return ['shopData', params];
};

export const fetchShopData = async (queryParams: ShopDataParams) => {
  try {
    console.log('queryParams');
    console.log(queryParams);
    const response = await getRequest<ShopData>({
      url: API_ENDPOINTS.SHOP_ALL,
      config: {
        params: queryParams,
      },
    });
    console.log('responsesssss');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('error');
    console.log(error);
    throw new Error('배송 정보를 불러오는데 실패했습니다.');
  }
};

export const useShopData = () => {
  const router = useRouter();
  const queryParams = createQueryParams(router.query);

  return useQuery({
    queryKey: createQueryKeyShopData(queryParams),
    queryFn: () => fetchShopData(queryParams),
    placeholderData: keepPreviousData,
  });
};

export const createQueryParams = (queryParams: ParsedUrlQuery) => {
  const page = queryParams.page ? String(queryParams.page) : '1';
  const categoryId = queryParams.categoryId
    ? String(queryParams.categoryId)
    : '0';
  const warranty = queryParams.warranty ? String(queryParams.warranty) : 'all';
  const priceMin = queryParams.priceMin ? String(queryParams.priceMin) : '0';
  const priceMax = queryParams.priceMax
    ? String(queryParams.priceMax)
    : '9999999';

  return {
    page,
    categoryId,
    warranty,
    priceMin,
    priceMax,
  };
};
