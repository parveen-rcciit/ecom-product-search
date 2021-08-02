import { Products, ProductQuery, ProductsMap } from "../../interface";
import { API_URL, pageSize } from "../../constants/config";
import { query } from "./query";

const getProductList = async (
  productQuery: ProductQuery
): Promise<Products | undefined> => {
  try {
    if (!productQuery || !Object.keys(productQuery).length) {
      throw new Error("Invalid input: Get Product List");
    }
    const { search, currentPage } = productQuery;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { search, pageSize, currentPage },
      }),
    };
    const response = await fetch(API_URL, options);
    const body: ProductsMap = await response.json();
    if (!body || !body.data) {
      throw new Error("Invalid response: Get Product List");
    }
    const {
      data: { products },
    } = body;
    return products;
  } catch (err) {
    console.error("Exception in fetching product list: ", err);
    return;
  }
};

export default getProductList;
