export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  rating: number;
  soldCount: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface ShopData {
  products: Product[];
  categories: Category[];
  totalPages: number;
}

// 상품 상세 페이지를 위한 새로운 인터페이스들
export interface ProductDescription {
  id: number;
  feature: string;
}

export interface ProductDetail extends Product {
  originalPrice: number;
  description: string;
  stock: number;
  warranty: string;
  categoryId: number;
  reviewCount: number;
}

export interface Specification {
  id: number;
  attribute: string;
  value: string;
}

export interface ShopDetail {
  product: ProductDetail;
  descriptions: ProductDescription[];
  specifications: Specification[];
}

export interface ReviewResponse {
  reviews: Review[];
}

export interface Review {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface SearchResponse {
  products: Product[];
  totalPages: number;
}

export interface FilterParams {
  categoryId?: number;
  priceMin?: number;
  priceMax?: number;
  warranty?: number;
  page?: string;
}
