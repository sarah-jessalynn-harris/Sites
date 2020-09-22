import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Basic/Home';
import Nav from "./Basic/Nav";
import LoginHandler from "./Login/index";
import LogOutHandler from "./Login/LogOutHandler";
import './App.css';
import ScrollToTop from './ScrollToTop';
import fire from './Fire';
import Dashboard from './Basic/Dashboard';
import Account from './Basic/Account';


class App extends Component {

  state = {authenticated: false, currentUser: null, loading: true, userData: ""};

  componentDidMount() {
    fire.auth().onAuthStateChanged((user=> {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user.uid,
          loading: true
        });

        this.getData(this.state.currentUser, this.storeData);

      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    }));
  }

  getData(user, callback) { 
      
    fire.firestore().collection("users").where("userData.uid", "==", user)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              let dataObj = doc.data();
              callback(dataObj);
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    };

    storeData = (dataObj) => {
      this.setState({userData : dataObj});
      this.setState({loading: false});
    }

  render() {

    if (this.state.loading) {

      return (
        <div className="loadingScreen">
          
          <p> Loading...</p>

        </div>
      );

    } else {

        return (
          <div className="App">

            <Router>
              <ScrollToTop/>

              <div>

                <Nav signedIn={this.state.authenticated} userData={this.state.userData}></Nav>

                <Route exact path={"/"} component={Home} />
                <Route exact path={"/login"} component={LoginHandler} />
                <Route exact path={"/logout"} component={LogOutHandler} />
                <Route exact path={"/dashboard"} component={Dashboard} />
                <Route exact path={"/account"}> <Account userData={this.state.userData} /></Route>

              </div>

            </Router>
            
          </div>
        );
    }
  }

}

export default App;
