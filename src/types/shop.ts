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
}

export interface ShopData {
  products: Product[];
  categories: Category[];
  totalPages: number;
}
