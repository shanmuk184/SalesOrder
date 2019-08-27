import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Tablayout from './Tabs';
import SignUp from './SignUp';
import Login from './Login';
import Tab from '@material-ui/core/Tab';

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab:0,
            currentIndex:0,
            username:'',
            password:''
        }
        this.tabs = [{index:0, name:'Sign Up', value:'signUp'}, {index:1, name:'Login', value:'login'}]
        this.handleChange = this.handleChange.bind(this);
        this.getContent = this.getContent.bind(this);
        this.populateTabs = this.populateTabs.bind(this);
    }
    populateTabs(){
        return this.tabs.map((item)=><Tab label= {item.name} {...this.tabProps(item.index)} />)
    }
    tabProps (key){    
        return(
            {
                'id':`tabs-layout-${key}`,
                'aria-controls': `full-width-tabpanel-${key}`
            }
        );
    }
    
    getContent (value){
        return this.tabs.map(tab=>{
            if (tab.index === 0){
                return (
                    <SignUp value={value} index={tab.index} />
                );
            } else {
                return (
                    <Login value={value} index={tab.index} />
                );
            }

        })
    }
    handleChange(currentTab, value){
        this.setState({
            [currentTab] :value
        })
    }

    render(){
        return(
            <Tablayout tabs = {this.populateTabs} value={this.state.currentTab} handleChange={this.handleChange} content={this.getContent} />
        )
    }
} 