import React, {Component} from "react";
//import PantryItem from "./PantryItem";
import {NavLink} from "react-router-dom";



class Plan extends Component {
    
    render() {

        return(
            <div className="mealPlan" id="mealPlan">

                <div className="mealPicking">
                    <h2> Plan Week</h2>

                    <div className="dates">
                        <div>
                            {/* <label for="date"> Start Date: </label> */}
                            <input name="date" type="date" id="date1"/>
                        </div>
            
                        <h4> to </h4>
            
                        <div>
                            {/* <label for="date2"> End Date: </label> */}
                            <input name="date2" type="date" id="date2"/>
                        </div>
                    </div>
    
                    <button id="mealFilter"> Refresh Plan</button>
                   
                </div>
        
                <div className="calendar">
                    <h1> Loading your meal plan... </h1>
                </div>
          </div>
        );
    }

}

export default Plan;