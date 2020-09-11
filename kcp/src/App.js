import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Basic/Home';
import Nav from "./Basic/Nav";
import './App.css';



class App extends Component {

  

  render() {


    return (
      <div className="App">

        <Router>

          <div>

            <Nav></Nav>

            <Route exact path={"/"} component={Home} />

          </div>

        </Router>

        

      </div>
    );
  }

}

export default App;
