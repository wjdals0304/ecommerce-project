import { useQuery } from '@tanstack/react-query';
import { OrderResponse } from '@/types/order';
import { getRequest } from '@/utils/apiClient';
import { API_ENDPOINTS } from '@/config/apiEndPoint';

const queryKeyOrderDetail = ['fetchOrderDetail'];

const fetchOrderDetail = async (orderId: string): Promise<OrderResponse> => {
  try {
    const response = await getRequest<OrderResponse>({
      url: `${API_ENDPOINTS.ORDERS}/${orderId}`,
    });

    return response.data;
  } catch {
    throw new Error('주문 정보를 불러오는데 실패했습니다.');
  }
};

export const useOrderDetail = (orderId: string) => {
  return useQuery({
    queryKey: [...queryKeyOrderDetail, orderId],
    queryFn: () => fetchOrderDetail(orderId),
    enabled: !!orderId,
  });
};
