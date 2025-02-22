import {useQuery} from '@tanstack/react-query';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/apiEndPoints';
import {ShippingResponse} from '@/types/order';

const queryKeyShipInfo = ['shipInfo'];

const fetchShipInfo = async () => {
  try {
    const response = await getRequest<ShippingResponse>({
      url: `${API_ENDPOINTS.SHIPPING_ADDRESS}`,
    });
    return response.data;
  } catch (error) {
    throw new Error('배송 정보를 불러오는데 실패했습니다.');
  }
};

export const useShipInfo = () => {
  return useQuery({
    queryKey: queryKeyShipInfo,
    queryFn: fetchShipInfo,
  });
};
