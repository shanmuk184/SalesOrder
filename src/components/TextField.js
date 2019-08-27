import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
container: {
      display: 'flex',
      flexWrap: 'wrap',
},
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  }));

export default function(props) {
    const classes = useStyles()
    const [labelWidth, setLabelWidth] = React.useState(0);
    return ( 
        <TextField
        id="outlined-name"
        label={props.label}
        className={classes.textField}
        value={props.value || ''}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
    );
}