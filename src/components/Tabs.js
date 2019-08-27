import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
  }));
  
export default function TabLayout(props){
    const handleChange = (e, value)=>{
        props.handleChange('currentTab', value);
    };
    const theme = useTheme();
    const classes = useStyles()

    const handleChangeIndex = (index) =>{
        props.handleChangeIndex('currentIndex', index)
    }
    
    return(
        <div className = {classes.root}>
        <AppBar position="static">
            <Tabs value={props.value} onChange={handleChange} aria-label="simple tabs example">
                {props.tabs()}
            </Tabs>
          </AppBar>

    <SwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={props.value}
    onChangeIndex={handleChangeIndex}
    >
    {props.content()}
    </SwipeableViews>
</div>
    );
}