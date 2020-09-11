import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Basic/Home';
import Nav from "./Basic/Nav";
import Login from "./Basic/Login";
import './App.css';
import ScrollToTop from './ScrollToTop';



class App extends Component {

  

  render() {


    return (
      <div className="App">

        <Router>
          <ScrollToTop/>

          <div>

            <Nav></Nav>

            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={Login} />

          </div>

        </Router>

        

      </div>
    );
  }

}

export default App;
