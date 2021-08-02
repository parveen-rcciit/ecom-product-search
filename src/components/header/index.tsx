import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Search from "../search";
import { headerTitle } from "../../constants/config";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "#FFFFFF",
    },
    appBar: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
    textField: {
      color: "#FFFFFF",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width: 960px)": {
        flexDirection: "column",
        margin: "12px",
      },
    },
  })
);

const Header: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { handleSubmit, setSearchQuery } = props;
  const trigger = useScrollTrigger();
  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.headerContainer}>
            <Typography variant="h6">{headerTitle}</Typography>
            <Search
              handleSubmit={handleSubmit}
              setSearchQuery={setSearchQuery}
            ></Search>
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
};

interface Props {
  handleSubmit: (value: React.FormEvent) => void;
  setSearchQuery: (value: string) => void;
}

export default Header;
