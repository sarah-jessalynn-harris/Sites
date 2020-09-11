import React, {Component} from "react";

class Home extends Component {

    render() {
        return(
            <div class="home">
                <div class="header">

                    <p> Do you need control in your kitchen?</p>
                    <p class="sub"> Find out how Kitchen Control Panel can change your meal prep experience. </p>

                </div>
                <div class="intro">

                    <h2> Kitchen Control Panel</h2>
                    <h3>Your all-in-one meal planner, recipe box, inventory, and grocery list</h3>
                    <p>You add your recipes to our virtual recipe box, pick which meals 
                        you want to have this week, keep track of what you have at home with our
                        inventory tool, and we'll let you know what you need to pick up at the store.
                    </p>

                    <button onclick="location.href='login.html'"> GET STARTED </button>

                </div>
            </div>
        );
    }

}

export default Home;