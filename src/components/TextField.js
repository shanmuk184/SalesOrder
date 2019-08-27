import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
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
    //   <FormControl className={classes.formControl} variant="outlined">
    //     <InputLabel  htmlFor="component-outlined">
    //       Named
    //     </InputLabel>
    //     <OutlinedInput
    //       id="component-outlined"
    //       value={props.name}
    //       onChange={props.handleChange}
    //       labelWidth={labelWidth}
    //     />
    //   </FormControl>
    );
}