import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import {format} from "date-fns";

import MealButton from "../Plan/MealButton";

//component for displaying user's recipe
class DashDay extends Component {    
    render() {

        // console.log(this.props.array);
        var day = this.props.date;
        var date = new Date(day);
        var weekday = format(date, "EEEE");
        var weekdate = format(date, "MM/dd");

        if(this.props.planned === true) {

            return(
                <div className="calendarBox">
                    <div className="dateRow">
                        <h4> {weekday}</h4>
                        <h4> {weekdate}</h4>
                    </div>
                        
                    <div className="mealBox">
    
                        {this.props.array.map((item, key) => 
    
                            <MealButton
                              key = {key} 
                              id = {item.id}
                              recipe = {item.recipe}
                              date = {item.date}
                              slot = {item.slot}
                              recipeData = {item.recipeData}
                            />
                        )
                            
                        }
    
                    </div>
                        
                </div>
            );

        } else {
            return(
                <div className="calendarBox">
                    <div className="dateRow">
                        <h4> {weekday}</h4>
                        <h4> {weekdate}</h4>
                    </div>
                        
                    <div className="mealBox">
                        <NavLink className="mealHolder"  to={"/plan/new"}> Plan a meal for this day!</NavLink>
                    </div>
                        
                </div>
            );
        }
    }

}

export default DashDay;