export const query = `query productQuery($search: String, $pageSize: Int, $currentPage: Int){
    products(search: $search, pageSize: $pageSize, currentPage: $currentPage) {
        total_count
        items {
            name
            sku
            price_range {
                minimum_price {
                    regular_price {
                        value
                        currency
                    }
                }
            }
            image {
                label
                url
            }
        }
        page_info {
            page_size
            current_page
            total_pages
        }
    }
}`;
