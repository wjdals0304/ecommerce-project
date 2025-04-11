import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/shared/lib/apiClient';
import { CartResponse } from '@/shared/types/cart';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';

export const queryKeyCart = ['cart'];

export const fetchCart = async () => {
  const response = await getRequest<CartResponse>({
    url: API_ENDPOINTS.CART,
  });

  return response.data;
};

export const useCartReload = (enabled: boolean = false) => {
  return useQuery({
    queryKey: queryKeyCart,
    queryFn: fetchCart,
    enabled,
  });
};
