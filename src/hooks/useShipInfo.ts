import {useQuery} from '@tanstack/react-query';
import {getRequest, getStoredToken} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {ShippingResponse} from '@/types/order';

const fetchShipInfo = async () => {
  try {
    const token = getStoredToken();
    const response = await getRequest<ShippingResponse>({
      url: `${API_ENDPOINTS.SHIPPING_ADDRESS}`,
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('배송 정보를 불러오는데 실패했습니다.');
  }
};

export const useShipInfo = () => {
  return useQuery({
    queryKey: ['shipInfo'],
    queryFn: fetchShipInfo,
  });
};
