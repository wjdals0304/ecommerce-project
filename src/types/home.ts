export interface FlashDeal {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  stock: number;
  soldCount: number;
}

export interface BestSeller {
  categoryId: number;
  categoryName: string;
  product: {
    id: number;
    name: string;
    images: string[];
  };
}

export interface HotProduct {
  id: number;
  name: string;
  price: number;
  images: string[];
  rating: number;
  soldCount: number;
  categoryId: number;
  categoryName: string;
}

export interface LatestBlog {
  id: number;
  title: string;
  image: string;
  createdAt: string;
}

export interface Banner {
  id: number;
  imageurl: string;
  size: string;
  createdat: string;
}

export interface EventBanners {
  largeBanners: Banner[];
  smallBanners: Banner[];
}

interface Category {
  id: number;
  name: string;
}

export interface HomeData {
  flashDeals: FlashDeal[];
  bestSellers: BestSeller[];
  hotProducts: HotProduct[];
  latestBlogs: LatestBlog[];
  eventBanners: EventBanners;
  categories: Category[];
}

export interface ProfileData {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
}
