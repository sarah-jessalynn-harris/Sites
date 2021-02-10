import React, {Component} from "react";
import Day from "./Day";
import {NavLink} from "react-router-dom";
import {add, format, isAfter, isBefore, isEqual} from "date-fns";


class Plan extends Component {

    constructor(){
        super();
        this.state = {
            weeks: {},
            loading: true,
            start: "",
            end: ""
        }

        this.handleRefresh = this.handleRefresh.bind(this);
    }

    componentDidMount(){
                //get start and end dates (with proper formatting)

                if(this.state.start === ""){
                    var today = new Date();
                    var start = format(today, "yyyy, MM, dd");
                    var week = add(today, {days: 6});
                    var end = format(week, "yyyy, MM, dd");

                    // console.log("the end is here", new Date(end))
    
                    this.setState({
                        start: start,
                        end: end
                    }, () => {
                        // console.log(this.state.start, this.state.end);
                        this.filterMeals();
                    });
                }          
    }

    handleRefresh(event){
        event.preventDefault();

        var newStart = new Date(event.target.elements[0].value.replace(/-/, '/'));
        var newEnd = new Date(event.target.elements[1].value.replace(/-/, '/'));

        var newStartF = event.target.elements[0].value.replaceAll('-', ', ');
        var newEndF = event.target.elements[1].value.replaceAll('-', ', ');

        // console.log(newStartF, newEndF);

        if(!isAfter(newEnd, newStart) && !isEqual(newEnd, newStart)) {
            alert("End date must come after start date chronologically.")
        } else {

            this.setState({
                start: newStartF,
                end: newEndF,
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
                        this.props.userData.mealplan.forEach(item => {
                            var startFormat = new Date(this.state.start);
                            var endFormat = new Date(this.state.end);
                            var dateFormat = new Date(item.date); 
                            
                            // find out if the date is within bounds
                            if((isAfter(dateFormat, startFormat) || isEqual(dateFormat, startFormat)) && (isBefore(dateFormat, endFormat) || isEqual(dateFormat, endFormat))){
                                
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

        if(this.state.loading){

          return(  <div className="loadingScreen">
          
          <p> Loading...</p>

        </div>);

        } else {

            var starter = format(new Date(this.state.start), "yyyy-MM-dd");

            var ender = format(new Date(this.state.end), "yyyy-MM-dd");

            return(
                <div className="mealPlan" id="mealPlan">
               

                        <form className="mealPicking" onSubmit={this.handleRefresh}>
                           
                            <div className="dates">
                            <h2> Plan Week</h2>
                                {/* <label for="date"> Start Date: </label> */}
                                <input className="input" name="date" type="date" id="date1" defaultValue={starter}/>
                           
                
                                <h4> to </h4>
                
                           
                                {/* <label for="date2"> End Date: </label> */}
                                <input className="input" name="date2" type="date" id="date2" defaultValue={ender}/>
                                <input type="submit" id="mealFilter" value="Refresh Plan"/> 
                            </div>

                            <NavLink className="button"  to={"/plan/new"}> Add Meal</NavLink>
                        </form>
        
                        
            
                    <div className="calendar">
                        {
                            Object.keys(this.state.weeks).map(key => {
                                return <Day
                                        key = {key}
                                        date = {key}
                                        array = {this.state.weeks[key]}
                                        planned = {this.state.weeks[key][0].planned}
                                    />
                            })
                        }

                    </div>
            </div>
            );
        }
    }
}

export default Plan;