import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import fire from "./Fire.js";
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Nav from "./Nav";
import Categories from './Categories/Categories';
import Articles from './Info/Articles';
import Activities from './Activity/Activities';
import Index from './Index/Index';
import Infinitives from './Info/Infinitives';
import Adjectives from './Info/Adjectives';
import Adverbs from './Info/Adverbs';
import Auxiliary from "./Info/Auxiliary";
import Gustar from "./Info/Gustar";
import Mood from "./Info/Mood";
import Nouns from "./Info/Nouns";
import Objects from "./Info/Objects";
import Participles from "./Info/Participles";
import Prepositions from "./Info/Prepositions";
import Pronouns from "./Info/Pronouns";
import Reflexive from "./Info/Reflexive";
import Tense from "./Info/Tense";


class App extends Component {

  

  render() {


    return (
      <div className="App">

        <Router>

          <div>

            <Nav></Nav>

            <PrivateRoute exact path={"/"} component={Home} />

            <Route exact path={"/"} component={Home} />

            <Route exact path={"/categories"} component={Categories} />

            <Route exact path={"/articles"} component={Articles} />

            <Route exact path={"/activities"} component={Activities} />

            <Route exact path={"/index"} component={Index} />

            <Route exact path={"/infinitives"} component={Infinitives} />

            <Route exact path={"/adjectives"} component={Adjectives} />

            <Route exact path={"/adverbs"} component={Adverbs} />

            <Route exact path={"/auxiliary"} component={Auxiliary} />

            <Route exact path={"/gustar"} component={Gustar} />

            <Route exact path={"/mood"} component={Mood} />

            <Route exact path={"/nouns"} component={Nouns} />

            <Route exact path={"/objects"} component={Objects} />  

            <Route exact path={"/participles"} component={Participles} />  

            <Route exact path={"/pronouns"} component={Pronouns} />     

            <Route exact path={"/prepositions"} component={Prepositions} />   

            <Route exact path={"/reflexive"} component={Reflexive} />

            <Route exact path={"/tense"} component={Tense} />

          </div>

        </Router>

        

      </div>
    );
  }

}

export default App;