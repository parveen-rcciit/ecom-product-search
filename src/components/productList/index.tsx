import React from "react";
import { ProductItem } from "../../interface";
//import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Product from "./product";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    productContainer: {
      margin: "0px",
    },
  })
);

const ProductList: React.FC<Props> = (props: Props) => {
  const { productList } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      spacing={8}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.productContainer}
    >
      {productList.length
        ? productList?.map((product: ProductItem) => (
            <Product key={product.sku} product={product}></Product>
          ))
        : null}
    </Grid>
  );
};

interface Props {
  productList: ProductItem[];
}

export default ProductList;
