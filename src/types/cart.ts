import {Product} from './shop';

export interface CartItem {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  product: Product;
}

export interface User {
  id: number;
  fullName: string;
}

export interface CartResponse {
  items: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  user: User;
}
