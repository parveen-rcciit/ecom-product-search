import React from "react";
import { paginationConsts } from "../../constants/config";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    paginationContainer: {
      width: "100% !important",
      margin: "36px 0px",
    },
    button: {
      color: "#000000",
    },
    current: {
      fontWeight: "bold",
    },
  })
);

const PaginationContainer: React.FC<PropType> = (props: PropType) => {
  const classes = useStyles();
  const { currentPage, totalPageCount } = props;

  const pageChangeHandler = (value: string) => {
    let pageNumber = 0;
    if (value === "first") {
      pageNumber = 1;
    } else if (value === "prev" && currentPage > 1) {
      pageNumber = currentPage - 1;
    } else if (value === "next" && currentPage < totalPageCount) {
      pageNumber = currentPage + 1;
    } else if (value === "last") {
      pageNumber = totalPageCount;
    } else {
      pageNumber = currentPage;
    }
    props.onPageChange(pageNumber);
  };

  return (
    <Grid
      container
      className={classes.paginationContainer}
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Button
          className={classes.button}
          variant="text"
          value="First"
          onClick={() => pageChangeHandler("first")}
        >
          {paginationConsts["first"]}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="text"
          onClick={() => pageChangeHandler("prev")}
        >
          {paginationConsts["prev"]}
        </Button>
      </Grid>
      <Grid item>
        <Typography className={classes.current}>
          {paginationConsts["page"]} {currentPage} {paginationConsts["of"]}{" "}
          {totalPageCount}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="text"
          onClick={() => pageChangeHandler("next")}
        >
          {paginationConsts["next"]}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          variant="text"
          onClick={() => pageChangeHandler("last")}
        >
          {paginationConsts["last"]}
        </Button>
      </Grid>
    </Grid>
  );
};

interface PropType {
  currentPage: number;
  totalPageCount: number;
  onPageChange: (value: number) => void;
}
export default PaginationContainer;
