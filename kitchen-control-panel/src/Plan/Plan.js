import React, {Component} from "react";
import Day from "./Day";
import {NavLink} from "react-router-dom";
import {add, format} from "date-fns";


class Plan extends Component {

    constructor(){
        super();
        this.state = {
            weeks:{},
            loading: true
        }
    }

    componentDidMount(){
                //get start and end dates (with proper formatting)
                var today = new Date();
                var start = format(today, "yyyy-MM-dd");
                var week = add(today, {days: 7});
                var end = format(week, "yyyy-MM-dd");

                this.setState({
                    start: start,
                    end: end
                });
        
                //seperate the meal plan information into days as an object
                var weeks = {};
        
                this.props.userData.mealplan.map((item, key) =>{
        
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

    render() {

        if(this.state.loading){

          return(  <div className="loadingScreen">
          
          <p> Loading...</p>

        </div>);

        } else {

            return(
                <div className="mealPlan" id="mealPlan">

                    <div className="mealPicking">
                        <h2> Plan Week</h2>

                        <div className="dates">
                            <div>
                                {/* <label for="date"> Start Date: </label> */}
                                <input name="date" type="date" id="date1" defaultValue={this.state.start}/>
                            </div>
                
                            <h4> to </h4>
                
                            <div>
                                {/* <label for="date2"> End Date: </label> */}
                                <input name="date2" type="date" id="date2" defaultValue={this.state.end}/>
                            </div>
                        </div>
        
                        <button id="mealFilter"> Refresh Plan</button>
                    </div>
            
                    <div className="calendar">
                        {
                            Object.keys(this.state.weeks).map(key => {

                                return <Day
                                        key = {key}
                                        date = {key}
                                        array = {this.state.weeks[key]}
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