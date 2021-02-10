import React, {Component} from "react";
import ListItem from "../List/ListItem";
import {NavLink} from "react-router-dom";
import {add, format, isAfter, isBefore, isEqual} from "date-fns";
import { unit } from 'mathjs';


class Generator extends Component {

    constructor(){
        super();
        this.state = {
            weeks: {},
            loading: true,
            start: "",
            end: ""
        }

        this.generate = this.generate.bind(this);
    }

    generate(event){
        event.preventDefault();

        if(event.target.elements[0].value == "" || event.target.elements[1].value == ""){
            alert("Please enter a start and ending date.");
            return;
        }

        var newStart = new Date(event.target.elements[0].value.replace(/-/, '/'));
        var newEnd = new Date(event.target.elements[1].value.replace(/-/, '/'));

        var newStartF = event.target.elements[0].value.replaceAll('-', ', ');
        var newEndF = event.target.elements[1].value.replaceAll('-', ', ');

        // console.log(newStartF, newEndF);

        if(!isAfter(newEnd, newStart) && !isEqual(newEnd, newStart)) {
            alert("End date must come after start date chronologically.")
        } else {
             this.getPlan(newStartF, newEndF); 
        }
    }
        
    

    getPlan(s, e){
        let recipes = [];

        this.props.data.mealplan.forEach(meal =>{

            var startFormat = new Date(s);
            var endFormat = new Date(e);
            var dateFormat = new Date(meal.date);

            if((isAfter(dateFormat, startFormat) || isEqual(dateFormat, startFormat)) && (isBefore(dateFormat, endFormat) || isEqual(dateFormat, endFormat))){
                recipes.push(meal.recipe);
            }
        });

        this.getIngredients(recipes);
    }

    getIngredients(r){
        console.log(r);

        let ingredients = [];

        this.props.data.recipes.forEach(recipe =>{
            r.forEach(id => {
                if(recipe.id == id){
                    recipe.ingredients.forEach(ingredient =>{
                        ingredients.push(ingredient);
                    });
                }
            });
        });

        this.compare(ingredients);
    }

    compare(ingredients){
        let needs = [];

        ingredients.forEach(ingredient => {
            this.props.data.inventory.forEach(item => {
                if(ingredient.name == item.name){

                    if(ingredient.label == item.label){
                        let amount = ingredient.amount - item.amount;

                        if (amount < 0) {
                            
                            needs.push({
                                amount: amount,
                                label: item.label,
                                name: item.name
                            });
                        }
                    }

                } else {
                    needs.forEach(need => {
                        if(need.name == ingredient.name){

                        } else {
                            needs.push(ingredient);
                        }
                    });
                }
            });

        });
    }

    render(){
        return(<div className="generator">
            <span className="close" onClick={() => this.props.toggle()}>&times;    </span>

            <h1> Shopping List Item Generator</h1>

            <form className="mealPicking" onSubmit={this.generate}>
                           
                           <div className="dates">
                           <h2> Missing Ingredients for: </h2>
                               <input className="input" name="date" type="date" id="lDate1"/>
                          
               
                               <h4> to </h4>
               
                               <input className="input" name="date2" type="date" id="lDate2" />
                               <input type="submit" id="mealFilter" value="Generate"/> 
                           </div>
            </form>
       
        </div>);
    }

}

export default Generator;