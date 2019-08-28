import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tablayout from "./Tabs";
import SignUp from "./SignUp";
import Login from "./Login";
import Tab from "@material-ui/core/Tab";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      currentIndex: 0,
      username: "",
      password: ""
    };
    this.tabs = [
      {
        id: 0,
        name: "Sign Up",
        key: "signUp",
        username: this.state.username,
        password: this.state.password,
        fields: ["name", "email", "mobile", "employee_id", "password"]
      },
      {
        id: 1,
        name: "Login",
        value: "login",
        username: this.state.username,
        password: this.state.password,
        fields: ["username", "password"]
      }
    ];
    this.handleChange = this.handleChange.bind(this);
    this.getContent = this.getContent.bind(this);
    this.populateTabs = this.populateTabs.bind(this);
    this.populateFields = this.populateFields.bind(this);
  }
  populateTabs() {
    return this.tabs.map(item => (
      <Tab label={item.name} {...this.tabProps(item.id)} key={item.id} />
    ));
  }
  populateFields(fields) {
    const fieldList = [];
    let id = 0;
    for (const field in fields) {
      fieldList.push({
        id: id,
        name: fields[field],
        defaultValue: ""
      });
      id++;
    }
    return fieldList;
  }
  tabProps(key) {
    return {
      id: `tabs-layout-${key}`,
      "aria-controls": `full-width-tabpanel-${key}`
    };
  }

  getContent(value) {
    return this.tabs.map(tab => {
      if (tab.id === 0) {
        return (
          <SignUp
            value={value}
            index={tab.index}
            fields={tab.fields}
            handleChange={this.handleChange}
            name={tab.value}
            key={tab.id}
            populateFields={this.populateFields}
          />
        );
      } else {
        return (
          <Login
            value={value}
            index={tab.index}
            fields={tab.fields}
            handleChange={this.handleChange}
            populateFields={this.populateFields}
            key={tab.id}
          />
        );
      }
    });
  }

  handleChange(currentTab, value) {
    this.setState({
      [currentTab]: value
    });
  }

  render() {
    return (
      <Tablayout
        tabs={this.populateTabs}
        value={this.state.currentTab}
        handleChange={this.handleChange}
        content={this.getContent}
      />
    );
  }
}
