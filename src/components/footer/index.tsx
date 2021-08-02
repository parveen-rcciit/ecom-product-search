import React from "react";
import { footerText } from "../../constants/config";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    boxSizing: "border-box",
    borderTop: "1px solid #ededed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80px",
    color: "#FFFFFF",
    fontSize: "14px",
    backgroundColor: "#000000",
    fontFamily: "Barlow, sans-serif",
  },
  title: {
    flexGrow: 1,
  },
});

const Footer: React.FC = React.memo(() => {
  const classes = useStyles();
  return <footer className={classes.footer}>&copy; {footerText}</footer>;
});

export default Footer;
