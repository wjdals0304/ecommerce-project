// 상품 인터페이스
export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  rating: number;
  soldCount: number;
}

// 카테고리 인터페이스
export interface Category {
  id: number;
  name: string;
}

// 전체 데이터 인터페이스
export interface ShopData {
  products: Product[];
  categories: Category[];
}
