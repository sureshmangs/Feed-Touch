import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import fire from './Config/Fire'
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import LoginSignup from './components/LoginSignup';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }
  render() 
  {
    return (
      <Router>
        <Navbar />
          <Switch>
            {this.state.user ? (<HomePage />) : (<LoginSignup />)}
            {/* <Route exact path="/" component={HomePage} /> */}
          </Switch>
      </Router>
    )
  }
}

export default App
