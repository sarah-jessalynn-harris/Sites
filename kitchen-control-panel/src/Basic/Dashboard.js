import React, {Component} from "react";
import {add, format, isAfter, isBefore, isEqual, isValid} from "date-fns";

//component to render the user dashboard
class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            weeks: {},
            loading: true,
            start: "",
            end: ""
        }
    }

    componentDidMount(){
        //get start and end dates (with proper formatting)

        if(this.state.start === ""){
            var today = new Date();
            var start = format(today, "yyyy, MM, dd");
            var week = add(today, {days: 3});
            var end = format(week, "yyyy, MM, dd");

            // console.log("the end is here", new Date(end))

            this.setState({
                start: start,
                end: end
            }, () => {
               this.filterMeals();
            });
        }  
        
        
    }

    filterMeals(){
        //create an object to hold days of the week
        var weeks = {};

        //create Day components for each day in the new week given
        var dayVar = new Date(this.state.start);
        var dayEnd = new Date(this.state.end);

        // console.log(dayVar, dayEnd);

        while(isBefore(dayVar, dayEnd) || isEqual(dayVar, dayEnd)) {
            // console.log("This day is correct.");

            Object.defineProperty(weeks, format(dayVar, "yyyy/MM/dd"), {
                value: [{
                    planned: false,
                }],
                configurable: true,
                enumerable: true
            });  

            dayVar = add(dayVar, {days: 1});
        }

        //seperate the meal plan information into days as an object based on these dates and add the meals to the days of the weeks that are planned
        this.props.userData.mealplan.map((item, key) =>{
            var startFormat = new Date(this.state.start);
            var endFormat = new Date(this.state.end);
            var dateFormat = new Date(item.date); 
            
            // find out if the date is within bounds
            if(isAfter(dateFormat, startFormat) || isEqual(dateFormat, startFormat) && isBefore(dateFormat, endFormat) || isEqual(dateFormat, endFormat)){
                
                // put the meal in the correct day - if it doesn't already exist make one
                if(weeks.hasOwnProperty(item.date)){
                    let arrayId = this.props.userData.recipes.findIndex(x => x.id === item.recipe);

                   
                    // if this is the first meal plan, get rid of the default planning placeholder
                    if(weeks[item.date][0].planned === false){
                        weeks[item.date].splice(0, 1);
                    }

                    weeks[item.date].push(
                        {
                            planned: true,
                            id : item.id,
                            key : key,
                            recipe : item.recipe,
                            date : item.date,
                            slot : item.slot,
                            recipeData : this.props.userData.recipes[arrayId]
                        }
                    );
                }
            }

        });

        this.setState({
            weeks: weeks,
            loading: false
        });
}

    render() {      

        return(
            <div className="dashboard">
                 <h3> Dashboard</h3>

                <div className="overview">

                    <h1> Plan Preview</h1>

                    <div className="box"></div>

                </div>

                <div className="dashButtons">
        
                </div>
            </div>
        );
    }

}

export default Dashboard;