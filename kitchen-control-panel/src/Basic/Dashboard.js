import React, {Component} from "react";
import {add, format, isAfter, isBefore, isEqual} from "date-fns";
import DashDay from "../Plan/DashDay";
import Card from "../Components/Card";

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

    dashlinks = [
        {
            title: "Recipes",
            desc: "Save your rescipes in this digital cookbook! You will also use these recipes to create meal plans.",
            action: "Get Cooking!",
            link: "/recipes/"
        },
        {
            title: "Pantry",
            desc: "Keep track of what you have at home by logging your food into your pantry.",
            action: "Fill Pantry!",
            link: "/pantry/"
        },
        {
            title: "Meal Plan",
            desc: "Pick out your recipes to create a meal plan! You can plan out as far in advance as you like.",
            action: "Plan It!",
            link: "/plan/"
        },
        {
            title: "Shopping List",
            desc: "View a list that can be generated for you if you have a meal plan set. You can add items manually, too!",
            action: "Go Shopping!",
            link: ""
        },
        {
            title: "Your Profile",
            desc: "View your user profile",
            action: "View Account!",
            link: "/account/"
        },
        {
            title: "Support",
            desc: "Need help organizing your kitchen with Kitchen Control Panel? Visit this page to see FAQs.",
            action: "Get Help!",
            link: "/help"
        },
      
    ];

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

        return(
            <div>
                <div className="dash">
                        Dashboard
                    </div>

                <div className="dashboard">

                    <div className="overview">

                        <h3> Upcoming Meals</h3>

                        <div className="box">
                        {
                                Object.keys(this.state.weeks).map(key => {
                                    return <DashDay
                                            key = {key}
                                            date = {key}
                                            array = {this.state.weeks[key]}
                                            planned = {this.state.weeks[key][0].planned}
                                        />
                                })
                            }
                        </div>

                    </div>

                    <div className="dashButtons">

                        {
                            this.dashlinks.map((item, key) => {
                                return <Card
                                    key={key}
                                    title = {item.title}
                                    desc = {item.desc}
                                    action = {item.action}
                                    link = {item.link}
                                />
                            })
                        }
            
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;