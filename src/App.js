import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        username:''
    }
    this.handleChange = this.handleChange.bind(this)  
  }
  handleChange(e){
    const value = e.target.value
    console.log(value)
    this.setState({value})
  }

  render(){
  return (
    <Container maxWidth="sm">

      <TextField label="username" value = {this.state.value} handleChange={this.handleChange} />
    </Container>
  );
  }
}

export default App;
