import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { ShippingResponse } from '@/shared/types/order';
import { getRequest } from '@/shared/lib/apiClient';
import { useQuery } from '@tanstack/react-query';

const queryKeyShipInfo = ['shipInfo'];

const fetchShipInfo = async () => {
  try {
    const response = await getRequest<ShippingResponse>({
      url: `${API_ENDPOINTS.SHIPPING_ADDRESS}`,
    });

    return response.data;
  } catch {
    throw new Error('배송 정보를 불러오는데 실패했습니다.');
  }
};

export const useShipInfo = () => {
  return useQuery({
    queryKey: queryKeyShipInfo,
    queryFn: fetchShipInfo,
  });
};
