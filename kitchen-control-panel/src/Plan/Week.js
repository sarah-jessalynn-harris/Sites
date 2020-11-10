import React, {Component} from "react";
import MealCard from "./MealCard";
import { NavLink } from "react-router-dom";

//component for displaying user's recipe
class Week extends Component {


    
    render() {

        return(
            <div className="calendarBox">
                <div className="dateRow">
                    {/* <h3>{currentDate.format('dddd')}</h3> */}
                    {/* <h3>{currentDate.format('M/D')}</h3> */}
                    <h3> Meow</h3>
                    <h3> Meow</h3>
                </div>
                    
                <div className="mealBox">

                    {
                        
                    }

                    <MealCard
                      id = {this.props.id}
                      recipe = {this.props.recipe}
                      date = {this.props.date}
                      slot = {this.props.slot}
                      recipeData = {this.props.recipeData}
                      />
                </div>
                    
            </div>
        );
    }

}

export default Week;