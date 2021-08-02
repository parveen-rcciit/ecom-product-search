export const API_URL = "https://coding-challenge.bstn.com/graphql";

export const pageSize = 96;

export const currencySymbols: { [key: string]: string } = {
  USD: "$", // US Dollar
  EUR: "€", // Euro
  CRC: "₡", // Costa Rican Colón
  GBP: "£", // British Pound Sterling
  ILS: "₪", // Israeli New Sheqel
  INR: "₹", // Indian Rupee
  JPY: "¥", // Japanese Yen
  KRW: "₩", // South Korean Won
  NGN: "₦", // Nigerian Naira
  PHP: "₱", // Philippine Peso
  PLN: "zł", // Polish Zloty
  PYG: "₲", // Paraguayan Guarani
  THB: "฿", // Thai Baht
  UAH: "₴", // Ukrainian Hryvnia
  VND: "₫", // Vietnamese Dong
};

export const headerTitle = "E-commerce Product Search";

export const footerText = "2021 Ecommerce Store, All rights reserved.";

export const paginationConsts = {
  prev: "Previous",
  next: "Next",
  first: "First",
  last: "Last",
  page: "Page",
  of: "of",
};

export const searchButtonText = "Search";

export const mockData = {
  total_count: 161,
  items: [
    {
      name: "Cronus Yoga Pant ",
      sku: "MP12",
      price_range: {
        minimum_price: { regular_price: { value: 48, currency: "EUR" } },
      },
      image: {
        label: "Cronus Yoga Pant ",
        url: "https://coding-challenge.bstn.com/media/catalog/product/cache/f577cd4af35bcd0d3f34ff781933c5c4/m/p/mp12-black_main_1.jpg",
      },
    },
    {
      name: "Zeppelin Yoga Pant",
      sku: "MP08",
      price_range: {
        minimum_price: { regular_price: { value: 82, currency: "EUR" } },
      },
      image: {
        label: "Zeppelin Yoga Pant",
        url: "https://coding-challenge.bstn.com/media/catalog/product/cache/f577cd4af35bcd0d3f34ff781933c5c4/m/p/mp08-green_main_1.jpg",
      },
    },
  ],
  page_info: { page_size: 96, current_page: 1, total_pages: 5 },
};
