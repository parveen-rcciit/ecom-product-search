import React, { useState, useEffect, useRef } from "react";
import { Products, ProductQuery, ProductItem } from "../../interface";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductList from "../../components/productList";
import getProductList from "../../services/products";
import Loader from "../../components/productList/loader";
import Pagination from "../../components/pagination/index";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      fontFamily: "Barlow, sans-serif",
      paddingTop: "80px",
      minHeight: "calc(100vh - 64px)",
    },
    headingContainer: {
      margin: "16px",
    },
    lisContainer: {
      // padding: '24px !important'
    },
    headingText: {
      fontSize: "20px",
      margin: "12px",
      textTransform: "uppercase",
    },
    headingResultText: {
      fontSize: "16px",
      margin: "12px",
    },
    message: {
      margin: "36px",
      fontSize: "24px",
    },
  })
);

const ProductContainer: React.FC = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productList, setProducts] = useState<ProductItem[]>([]);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [totalProductCount, setTotalProductCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    const productQuery: ProductQuery = {
      search: searchQuery,
      currentPage: currentPage,
    };
    fetchProductList(productQuery);
  }, [currentPage]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setCurrentPage(1);
    const productQuery: ProductQuery = {
      search: searchQuery,
      currentPage: 1,
    };
    fetchProductList(productQuery);
  };
  const fetchProductList = (productQuery: ProductQuery) => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    getProductList(productQuery)
      .then((res: Products | undefined) => {
        if (!res) {
          throw new Error();
        }
        const {
          items = [],
          total_count = 0,
          page_info: { total_pages = 0 } = {},
        } = res || {};
        setSearchTerm(productQuery.search);
        setProducts(items);
        setTotalPageCount(total_pages);
        setTotalProductCount(total_count);
        setMessage("");
        if (!items.length) {
          setMessage(`No Products found for: '${productQuery.search}'`);
        }
      })
      .catch(() => setMessage("Something went wrong. Please try later."))
      .finally(() => setIsLoading(false));
  };
  const productsPerPage =
    totalPageCount === currentPage
      ? totalProductCount - 96 * (totalPageCount - 1)
      : 96;
  const searchResultText = searchTerm
    ? `SEARCH RESULTS FOR: '${searchTerm}'`
    : "";
  return (
    <React.Fragment>
      <Header
        handleSubmit={handleSearch}
        setSearchQuery={setSearchQuery}
      ></Header>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={12} className={classes.lisContainer}>
          {isLoading ? <Loader></Loader> : null}
          {!isLoading && productList.length ? (
            <React.Fragment>
              <div className={classes.headingContainer}>
                <h2 className={classes.headingText}>{searchResultText}</h2>
                <h4 className={classes.headingResultText}>
                  Showing{" "}
                  {totalProductCount <= productsPerPage
                    ? totalProductCount
                    : productsPerPage}{" "}
                  of {totalProductCount} results
                </h4>
              </div>
              <ProductList productList={productList}></ProductList>
              <Pagination
                currentPage={currentPage}
                totalPageCount={totalPageCount}
                onPageChange={setCurrentPage}
              ></Pagination>
            </React.Fragment>
          ) : null}
          {message ? <div className={classes.message}>{message}</div> : null}
        </Grid>
      </Grid>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default ProductContainer;
