import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Home from './Basic/Home';
import Nav from "./Basic/Nav";
import LoginHandler from "./Login/index";
import LogOutHandler from "./Login/LogOutHandler";
import './App.css';
import ScrollToTop from './ScrollToTop';
import fire from './Fire';
import Dashboard from './Basic/Dashboard';
import Account from './Basic/Account';
import Recipes from './Recipes/Recipes';
import Recipe from './Recipes/Recipe';
import RecipeHandler from './Recipes/index';

//component that controls everything
class App extends Component {

  state = {authenticated: false, currentUser: null, loading: true, userData: ""};

  //find out if the user is logged in and show the correct nav and data if so, otherwise show defaults for being logged out
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

  //store user data for the app to use
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
    // if the page is still loading, show the loading screen otherwise show loaded page
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

                <Route exact path={"/recipes"}> <Recipes userData={this.state.userData} /></Route>

                <Route exact path={"/recipe/:id"} render={({match}) => (
                    <Recipe 
                      userData={this.state.userData.recipes} 
                      id = {match.params.id}
                    />
                )}/>

                <Route exact path={"/recipes/new"}><RecipeHandler type = "new" uid={this.state.userData.userData.uid} id={this.state.userData.userData.id}/></Route>

                <Route exact path={"/recipe/edit/:id"} render={({match}) => (
                    <RecipeHandler 
                      type = "edit" 
                      id = {match.params.id}
                    />
                )}/>


              </div>

            </Router>
            
          </div>
        );
    }
  }
}

export default App;
