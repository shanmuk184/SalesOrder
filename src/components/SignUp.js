import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const styles = theme => {
  return {
    columnFlex: {
      display: "flex",
      justify: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: theme.spacing(0)
    }
  };
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange(e) {
    this.props.handleChange(this.props.key, e.target.value);
  }

  render() {
    const { classes, name, handleChange } = this.props;
    const fields = this.props.populateFields(this.props.fields);
    if (fields) {
      return (
        <form className={classes.columnFlex}>
          <Grid
            container
            className={classes.columnFlex}
            alignItems="center"
            justify="center"
          >
            {fields.map(field => (
              <TextField
                id={`outlined-${field.id}`}
                label={field.name}
                className={classes.textField}
                value={field.value || ""}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            ))}
          </Grid>
          <Button>{name}</Button>
        </form>
      );
    } else {
      return null;
    }
  }
}

export default withStyles(styles)(SignUp);
