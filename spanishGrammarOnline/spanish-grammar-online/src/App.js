import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import fire from "./Fire.js";
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Nav from "./Nav";
import Categories from './Categories/Categories';
import Articles from './Articles/Articles';


class App extends Component {

  

  render() {


    return (
      <div className="App">

        <Router>

          <div>

            <Nav></Nav>

            <PrivateRoute exact path={"/"} component={Home} />

            <Route exact path={"/categories"} component={Categories} />

            <Route exact path={"/articles"} component={Articles} />
            

          </div>

        </Router>

        

      </div>
    );
  }

}

export default App;