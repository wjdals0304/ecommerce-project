export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  ROOT: '/',
  AUTH_SIGNUP_EMAIL: '/auth/signup/email',
  AUTH_SIGNIN_EMAIL: '/auth/signin/email',
  AUTH_SIGNUP_GOOGLE: '/auth/signup/google',
  HOME: '/home',
  SHOP_ALL: '/shop/all',
  SHOP: '/shop',
  BLOG: '/blog',
  SEARCH: '/search',
  CART: '/cart',
  CART_ADD: '/cart/add',
  SHIPPING_ADDRESS: '/shipping/address',
  ORDERS: '/orders',
  ORDER_DETAIL: '/orders/:id',
  PRODUCT: '/product',
  AUTH_ME: '/auth/me',
  AUTH_LOGOUT: '/auth/logout',
};
