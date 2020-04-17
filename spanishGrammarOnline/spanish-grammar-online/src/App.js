import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import fire from "./Fire.js";
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Nav from "./Nav";


class App extends Component {

  state = {loading: true, ids : []};

  render() {

    const {loading} = this.state;

    if (loading) {
      return <p> Loading...</p>
    }

    return (
      <div className="App">

        <Router>

          <Nav signedIn={this.state.authenticated} />

          <div>
              <PrivateRoute exact path={"/"} component={Home}/>
          </div>

        </Router>

      </div>
    );
  }

  idGetter(id) {
      this.setState({ids : [id].concat(this.state.ids)});

  };

  getIds(idx) {
      this.setState({ids: idx});
  }
}

export default App;