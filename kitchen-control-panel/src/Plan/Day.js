import React, {Component} from "react";
import MealCard from "./MealCard";
import { NavLink } from "react-router-dom";
import {format} from "date-fns";

//component for displaying user's recipe
class Day extends Component {    
    render() {

        console.log(this.props.array);
        var day = this.props.date;
        var date = new Date(day);
        var weekday = format(date, "EEEE");
        var weekdate = format(date, "MM/dd");

        if(this.props.planned === true) {

            return(
                <div className="calendarBox">
                    <div className="dateRow">
                        <h3> {weekday}</h3>
                        <h3> {weekdate}</h3>
                    </div>
                        
                    <div className="mealBox">
    
                        {this.props.array.map((item, key) => 
    
                            <MealCard
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
                        <h3> {weekday}</h3>
                        <h3> {weekdate}</h3>
                    </div>
                        
                    <div className="mealBox">
    
                        <button> Plan</button>
    
                    </div>
                        
                </div>
            );
        }
    }

}

export default Day;