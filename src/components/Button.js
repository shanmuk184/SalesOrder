import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
//props={label, handleChange, }
export default function(props) {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary">
      {props.name}
    </Button>
  );
}
