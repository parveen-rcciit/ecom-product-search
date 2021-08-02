import Button from "@material-ui/core/Button";
import { createStyles, withStyles } from "@material-ui/core/styles";

const SearchButton = withStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#FFFFFF",
      borderRadius: 0,
      borderBottom: "none",
      marginLeft: "8px",
      "&:hover": {
        backgroundColor: "#827d7d",
        color: "#FFFFFF",
      },
      "&:active": {
        backgroundColor: "#827d7d",
        color: "#FFFFFF",
      },
    },
  })
)(Button);

export default SearchButton;
