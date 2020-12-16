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
import Recipes from './Recipes/Recipes';
import Recipe from './Recipes/Recipe';
import RecipeHandler from './Recipes/index';
import PantryHandler from './Pantry/index';
import Pantry from './Pantry/Pantry';
import Plan from './Plan/Plan';
import PlanHandler from './Plan/index';
import Faq from './Help/FAQ';

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

  //get user data for the app to use
  getData(user, callback) { 
      
    //find out the doc id of the user
      fire
      .firestore()
      .collection("users")
      .where("userData.uid", "==", user)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                //get the data and watch it      
                fire.firestore()
                .collection("users")
                .doc(doc.id)
                .onSnapshot(function(doc) {
                    // console.log("Current data: ", doc.data());
                    let dataObj = doc.data();
                    callback(dataObj);
                });

            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });


      };

  //store user data for the app to use
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

        if(this.state.authenticated) {

          return (
            <div className="App">
  
              <Router>
                
                <ScrollToTop/>
  
                <div>
  
                  <Nav signedIn={this.state.authenticated} userData={this.state.userData}></Nav>
  
                  <Route exact path={"/"} component={Home} />

                  <Route exact path={"/help"} component={Faq} />
  
                  <Route exact path={"/login"} component={LoginHandler} />
  
                  <Route exact path={"/logout"} component={LogOutHandler} />
  
                  <Route exact path={"/dashboard"}>
                    <Dashboard  userData={this.state.userData}/>
                  </Route>
                  
                  <Route exact path={"/account"}> <Account userData={this.state.userData} /></Route>
  
                  <Route exact path={"/recipes"}> <Recipes userData={this.state.userData} /></Route>
  
                  <Route exact path={"/recipe/:id"} render={({match}) => (
                      <Recipe 
                        userData={this.state.userData.recipes} 
                        id = {match.params.id}
                      />
                  )}/>
  
                  <Route exact path={"/recipes/new"}>
                      <RecipeHandler 
                        type = "new" 
                        uid={this.state.userData.userData.uid} 
                        id={this.state.userData.userData.id}
                      />
                  </Route>
  
                  <Route exact path={"/recipe/edit/:id"} render={({match}) => (
                      <RecipeHandler 
                        type = "edit" 
                        id = {match.params.id}
                        userData = {this.state.userData}
                      />
                  )}/>

                  
                  <Route exact path={"/recipe/delete/:id"} render={({match}) => (
                      <RecipeHandler 
                        type = "delete" 
                        id = {match.params.id}
                        userData = {this.state.userData}
                      />
                  )}/>

                  <Route exact path={"/pantry"}> 
                    <Pantry userData={this.state.userData} />
                  </Route>
                    
                    <Route exact path={"/pantry/new"}>
                        <PantryHandler 
                          type = "new" 
                          uid={this.state.userData.userData.uid} 
                          id={this.state.userData.userData.id}
                        />
                    </Route>

                    <Route exact path={"/pantry/edit/:id"} render={({match}) => (
                        <PantryHandler 
                          type = "edit" 
                          id = {match.params.id}
                          userData = {this.state.userData}
                        />
                    )}/>

                    
                    <Route exact path={"/pantry/delete/:id"} render={({match}) => (
                        <PantryHandler 
                          type = "delete" 
                          id = {match.params.id}
                          userData = {this.state.userData}
                        />
                    )}/>

                <Route exact path={"/plan"}> 
                    <Plan 
                        userData={this.state.userData} 
                      />
                </Route>
                    
                    <Route exact path={"/plan/new"}>
                        <PlanHandler 
                          type = "new" 
                          uid={this.state.userData.userData.uid} 
                          id={this.state.userData.userData.id}
                          recipes={this.state.userData.recipes}
                        />
                    </Route>

                    <Route exact path={"/plan/edit/:id"} render={({match}) => (
                        <PlanHandler 
                          type = "edit" 
                          id = {match.params.id}
                          userData = {this.state.userData}
                          recipes={this.state.userData.recipes}
                        />
                    )}/>

                    <Route exact path={"/plan/delete/:id"} render={({match}) => (
                        <PlanHandler 
                          type = "delete" 
                          id = {match.params.id}
                          userData = {this.state.userData}
                        />
                    )}/>
  
  
                </div>
  
              </Router>
              
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
  
                </div>
  
              </Router>
              
            </div>
          );

        }
        

    }
  }
}

export default App;
