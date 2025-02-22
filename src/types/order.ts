import {Product} from './shop';

export interface OrderResponse {
  id: number;
  user_id: number;
  total_amount: number;
  status: string;
  shipping_address_id: number;
  payment_method: string;
  payment_status: string;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  created_at: string;
  product: Product;
}

export interface ShippingResponse {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  memo: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}
