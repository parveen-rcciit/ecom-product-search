import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import { ProductItem } from "../../interface";
import { currencySymbols } from "../../constants/config";

const useStyles = makeStyles(() =>
  createStyles({
    productItem: {},
    paper: {
      padding: "24px;",
      margin: "0 24px",
      border: "1px solid #EDEDED",
      fontFamily: "Barlow, sans-serif",
      transition: "transform .3s",
      "&:hover": {
        backgroundColor: "#ece8e8",
        transform: "scale(1.1)",
      },
    },
    image: {
      minHeight: "225px",
      marginBottom: "12px",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    productName: {
      fontSize: "14px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    productSku: {
      fontSize: "16px",
    },
    productPrice: {
      fontSize: "14px",
    },
  })
);

const Product: React.FC<PropType> = (props: PropType) => {
  const classes = useStyles();
  const { product } = props;
  const currencySym: string =
    product.price_range.minimum_price.regular_price.currency;
  const currencySymbol: string =
    currencySymbols[`${currencySym}`] || currencySymbols["EUR"];
  return (
    <Grid
      key={product.sku}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className={classes.productItem}
    >
      <Paper className={classes.paper}>
        <ButtonBase className={classes.image}>
          <img
            className={classes.img}
            alt={product.image.label}
            src={product.image.url}
          />
        </ButtonBase>
        <Typography
          className={classes.productName}
          gutterBottom
          variant="subtitle1"
        >
          {product.name}
        </Typography>
        <Typography
          className={classes.productSku}
          gutterBottom
          variant="subtitle1"
        >
          {product.sku}
        </Typography>
        <Typography
          className={classes.productPrice}
          variant="body2"
          gutterBottom
        >
          {currencySymbol}
          {product.price_range.minimum_price.regular_price.value}
        </Typography>
      </Paper>
    </Grid>
  );
};

interface PropType {
  product: ProductItem;
}

export default Product;
