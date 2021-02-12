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
        // put needed ingredient objects in an array
        let needs = [];



        // go through the ingredients ...
        ingredients.forEach(ingredient => {
            
            // keep track of the forEach iterations for the inventory
            let tally = 0;
            
            // ... to compare them to the inventory items we have
            this.props.data.inventory.forEach(item => {
                // if there's a match in the inventory and a needed item, find out how much is needed or if we have enough
                if(ingredient.name == item.name){

                    // if the ingredient name matches, that means we have some of this ingredient already. We need to find out if we need more or not. Start by finding0 out if the labels match too
                    if(ingredient.label == item.label){
                        // if the labels are the same, we can easily calculate the amount
                        let amount = ingredient.amount - item.amount;

                        // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                        if (amount <= 0) {

                            // but before we add it, we have to see if this ingredient type is already in the needs list so we can add it to an existing entry, or add it to the list as a new item type                    
                          
                        } //if it were positive, that means we don't need anymore, so we don't need to add it to the needs list

                    } else {
                        // if the labels don't match, we'll have to convert the amounts before adding it to the needs list

                        let amount;

                        // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                        if (amount <= 0) {

                            // find out if this ingredient type is already in our needs array                     
                          
                        } //if it were positive, that means we don't need anymore, so we don't need to add it to the needs list
                    }

                } else {
                    // if the ingredient names don't match the inventory item, we may need to add something we don't have. Only add it to the needs list if we're sure (aka if we're comparing it to the last ingredient in the inventory to the needed ingredient in question) 
                    if(tally == ingredients.length){
                        // check if the ingredient is already added to needs
                        needs.forEach(need => {
                            if(need.name == ingredient.name){
                                // if yes, find out if the format is the same
                                if(need.label == ingredient.label){
                                    // if the labels and name are the same, simply add the amount and add it to the array
                                    let newAmt = ingredient.amt + need.amt;
                                    need.amount = newAmt;
                                } else {
                                    // if the labels don't match, convert before adding back to the array

                                }
    
                            } else {
                                // if the need isn't already in the list, add it
                                needs.push(ingredient);
                            }
                        });
                    }
                }
                // count the iteration of the forEach for inventory items we're comparing
                tally++;
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