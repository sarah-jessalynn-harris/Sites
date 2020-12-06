import React, {Component} from "react";
import Day from "./Day";
import {NavLink} from "react-router-dom";
import {add, format, isAfter, isBefore, isEqual, isValid} from "date-fns";


class Plan extends Component {

    constructor(){
        super();
        this.state = {
            weeks:{},
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
                    var start = format(today, "yyyy-MM-dd");
                    var week = add(today, {days: 7});
                    var end = format(week, "yyyy-MM-dd");
    
                    this.setState({
                        start: start,
                        end: end
                    });

                    console.log("here");
                }

        
                //create an object to hold days of the week
                var weeks = {};

                console.log(this.state.start);

                //seperate the meal plan information into days as an object based on these dates and add the meals to the days of the weeks that are planned
                this.props.userData.mealplan.map((item, key) =>{
                    

                    var dateFormat = new Date(item.date); 
                    var startFormat = new Date(this.state.start);
                    var endFormat = new Date(this.state.end);

                    console.log(startFormat);

                    if(isAfter(dateFormat, startFormat) && isBefore(dateFormat, endFormat)){
                        console.log("short");
                    }

                    if(weeks.hasOwnProperty(item.date)){
                        let arrayId = this.props.userData.recipes.findIndex(x => x.id === item.recipe);

                        weeks[item.date].push(
                            {
                                id : item.id,
                                key : key,
                                recipe : item.recipe,
                                date : item.date,
                                slot : item.slot,
                                recipeData : this.props.userData.recipes[arrayId]
                            }
                        );
        
                    } else {
                        let arrayId = this.props.userData.recipes.findIndex(x => x.id === item.recipe);
                        console.log(arrayId, item.recipe);
                        Object.defineProperty(weeks, item.date, {
                            value: [{
                                id : item.id,
                                key : key,
                                recipe : item.recipe,
                                date : item.date,
                                slot : item.slot,
                                recipeData : this.props.userData.recipes[arrayId]
                            }],
                            configurable: true,
                            enumerable: true
                        });   
                    }
                });
        
                this.setState({
                    weeks: weeks,
                    loading: false
                });
    }

    handleRefresh(event){
        event.preventDefault();

        var newStart = new Date(event.target.elements[0].value);
        var newEnd = new Date(event.target.elements[1].value);

        if(!isAfter(newEnd, newStart) && !isEqual(newEnd, newStart)) {
            alert("End date must come after start date chronologically.")
        } else {

            this.setState({
                start: event.target.elements[0].value,
                end: event.target.elements[1].value
            });
        }
        
    }

    render() {

        console.log(this.state);

        if(this.state.loading){

          return(  <div className="loadingScreen">
          
          <p> Loading...</p>

        </div>);

        } else {

            return(
                <div className="mealPlan" id="mealPlan">
               

                        <form className="mealPicking" onSubmit={this.handleRefresh}>
                           
                            <div className="dates">
                            <h2> Plan Week</h2>
                                {/* <label for="date"> Start Date: </label> */}
                                <input className="input" name="date" type="date" id="date1" defaultValue={this.state.start}/>
                           
                
                                <h4> to </h4>
                
                           
                                {/* <label for="date2"> End Date: </label> */}
                                <input className="input" name="date2" type="date" id="date2" defaultValue={this.state.end}/>
                                <input type="submit" id="mealFilter" value="Refresh Plan"/> 
                            </div>

                       
                            <button> Add Meal</button>
                        </form>
        
                        
            
                    <div className="calendar">
                        {
                            Object.keys(this.state.weeks).map(key => {

                                return <Day
                                        key = {key}
                                        date = {key}
                                        array = {this.state.weeks[key]}
                                        planned = {true}
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