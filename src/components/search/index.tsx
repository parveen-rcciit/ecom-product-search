import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchButton from "./button";
import { searchButtonText } from "../../constants/config";

const useStyles = makeStyles(() =>
  createStyles({
    form: {},
    textField: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
    searchIcon: {},
    input: {
      height: "20px",
      fontSize: "1.2em",
      padding: "8px 16px",
      outline: "none",
      "&:after": {
        borderBottom: "none",
      },
      "@media (max-width: 600px)": {
        width: "150px",
      },
    },
    searchLabel: {
      display: "block",
      "@media (max-width: 600px)": {
        display: "none",
      },
    },
    button: {
      height: 34,
    },
  })
);

const Search: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { handleSubmit, setSearchQuery } = props;
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          type="search"
          InputProps={{ classes: { input: classes.input } }}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Products"
        />
        <SearchButton type="submit" className={classes.searchIcon}>
          <SearchIcon className={classes.searchIcon}></SearchIcon>
          <span className={classes.searchLabel}>{searchButtonText}</span>
        </SearchButton>
      </form>
    </div>
  );
};

interface Props {
  handleSubmit: (value: React.FormEvent) => void;
  setSearchQuery: (value: string) => void;
}

export default Search;
