import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Home extends Component {

    render() {
        return(
            <div className="home">
                <div className="header">

                    <p> Do you need control in your kitchen?</p>
                    <a className="homeButton" href="#intro"> Find out how Kitchen Control Panel can change your meal prep experience. </a>

                </div>
                <div className="intro" id="intro">

                    <h2> Kitchen Control Panel</h2>
                    <h3>Your all-in-one meal planner, recipe box, inventory, and grocery list</h3>
                    <p>You add your recipes to our virtual recipe box, pick which meals 
                        you want to have this week, keep track of what you have at home with our
                        inventory tool, and we'll let you know what you need to pick up at the store.
                    </p>

                    <NavLink exact className="homeButton" activeClassName="active" to={"/login"}> Get Started </NavLink> 

                </div>
            </div>
        );
    }

}

export default Home;