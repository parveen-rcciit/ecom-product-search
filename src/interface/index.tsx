export interface ProductsMap {
  data: {
    products: Products;
    error: [];
  };
}

export interface Products {
  total_count: number;
  items: ProductItem[];
  page_info: PageInfo;
}

export interface ProductItem {
  name: string;
  sku: string;
  image: Image;
  price_range: PriceRange;
}

export interface Image {
  label: string;
  url: string;
}

export interface PriceRange {
  minimum_price: {
    regular_price: {
      value: string;
      currency: string;
    };
  };
}
export interface PageInfo {
  page_size: number;
  current_page: number;
  total_pages: number;
}

export interface ProductQuery {
  search: string;
  currentPage: number;
}
