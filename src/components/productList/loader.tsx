import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() =>
  createStyles({
    loaderContainer: {
      margin: "72px 0px 0px 0px",
    },
    skeletonItem: {
      margin: "8px 0",
    },
    paper: {
      padding: "24px;",
      margin: "0 24px",
      border: "1px solid #EDEDED",
    },
  })
);

const Loader: React.FC = () => {
  const classes = useStyles();
  const dummy = Array.from(new Array(8).keys());
  return (
    <Grid
      container
      item
      xs={12}
      spacing={9}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.loaderContainer}
    >
      {dummy.map((value) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={classes.skeletonItem}
          key={value}
        >
          <Paper className={classes.paper}>
            <Skeleton variant="rect" height={325} />
            <Skeleton variant="text" height={25} />
            <Skeleton variant="text" height={25} />
            <Skeleton variant="text" height={25} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Loader;
