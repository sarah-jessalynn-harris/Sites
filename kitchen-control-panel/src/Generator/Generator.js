import React, {Component} from "react";
import {isAfter, isBefore, isEqual} from "date-fns";
import { create, all } from 'mathjs';
import GList from "./Glist";

const config = {};
const math = create(all, config);

class Generator extends Component {

    constructor(){
        super();
        this.state = {
            weeks: {},
            loading: true,
            start: "",
            end: "",
            generating: true,
            needList: []
        }

        this.generate = this.generate.bind(this);
    }

    generate(event){
        event.preventDefault();

        if(event.target.elements[0].value === "" || event.target.elements[1].value === ""){
            alert("Please enter a start and ending date.");
            return;
        }

        var newStart = new Date(event.target.elements[0].value.replace(/-/, '/'));
        var newEnd = new Date(event.target.elements[1].value.replace(/-/, '/'));

        var newStartF = event.target.elements[0].value.replaceAll('-', ', ');
        var newEndF = event.target.elements[1].value.replaceAll('-', ', ');

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
        console.log(recipes);
        this.getIngredients(recipes);
    }

    // find out what ingredients we need from the recipes planned
    getIngredients(plans){

        // list of ingredients we need
        let extractedIngredients = [];

        console.log(extractedIngredients);
        // go through each planned recipe id
        plans.forEach(plan =>{
            // find the recipe from the database that matches the id
            this.props.data.recipes.forEach(recipe => {
                // if they match, go through each needed ingredient and add it to the list
                if(recipe.id === plan){
                    recipe.ingredients.forEach(ingredient =>{
                        console.log(ingredient);

                        let arrayId = extractedIngredients.findIndex(object => object.name === ingredient.name);
                        console.log(arrayId);

                        // find out if the ingredient type is in the array already
                       if(arrayId === -1){
                            //if it isn't we can just add it    
                            extractedIngredients.push(ingredient);
                            console.log("just adding: ", ingredient);
                       } else {

                            let arrayObj = extractedIngredients[arrayId];
                            console.log("already in array: ", arrayObj)

                            let ingredientUnit = math.unit(ingredient.label);
                                            
                            let itemUnit = math.unit(arrayObj.label);

                            // if it is, we need to see if the units are compatable
                            if(arrayObj.label === ingredient.label){
                                console.log("same label before: ", ingredient, arrayObj );
                                arrayObj.amount = ingredient.amount + arrayObj.amount;
                                console.log("same label after: ", ingredient, arrayObj );
                            } else if(!itemUnit.equalBase(ingredientUnit)){
                                // if they aren't, just add to the needs list
                                extractedIngredients.push(ingredient);
                            } else {
                                console.log("needs conversion: ", ingredient);
                                // if they are, convert and add to the list
                                let newLabel = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + arrayObj.label)).toJSON();
                                console.log(ingredient, newLabel);
                                let newAmount  = arrayObj.amount + newLabel.value; 

                                console.log(ingredient, arrayObj, newAmount);

                                arrayObj.amount = newAmount;
                            
                                console.log(ingredient, arrayObj);

                                
                            }
                       }
                        
                        
                    });
                }
            });
        });
        console.log(extractedIngredients);
        this.compare(extractedIngredients);
    }

    compare(ingredients){
        // put needed ingredient objects in an array
        let needs = [];

        console.log(needs);

        // go through the ingredients ...
        ingredients.forEach(ingredient => {
            
            //console.log(needs);
            // keep track of the forEach iterations for the inventory
            let iterations = 0;

            // keep track of iterations that match
            let tally = 0;
            
            // ... to compare them to the inventory items we have
            this.props.data.inventory.forEach(item => {
                
                // count this iteration
                iterations ++;

                // console.log(ingredient.name, item.name);
                
                // if there's a match in the inventory and a needed item, find out how much is needed or if we have enough
                if(ingredient.name === item.name){
                    // count the iteration of the forEach for inventory items that matched our plan ingredients
                    tally++;
                    // console.log(tally);
                    // if the ingredient name matches, that means we have some of this ingredient already. We need to find out if we need more or not. Start by finding out if the labels match too
                    if(ingredient.label === item.label){
                        // if the labels are the same, we can easily calculate the amount
                        let amount = item.amount - ingredient.amount;

                        // console.log(ingredient.name, " ", item.name, " ", amount);

                        // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                        if (amount < 0) {
                            // but before we add it, we have to see if this ingredient type is already in the needs list so we can add it to an existing entry, or add it to the list as a new item type  
                            if(needs.length === 0) {
                                let neededObj = {
                                    amount: (amount * -1),
                                    name: ingredient.name,
                                    label: ingredient.label
                                }

                                needs.push(neededObj);

                                // console.log("Adding " + ingredient.name + " here!");
                            } else {
                                // count the iteration as we go through the needs list
                                let needTally = 0;

                                // check if the ingredient is already added to needs
                                needs.forEach(need => {
                                    // count this itereation
                                    needTally ++;

                                    // is it in the needs array already?
                                    if(need.name === ingredient.name){
                                        // if yes, find out if the format is the same
                                        if(need.label === ingredient.label){
                                            // if the labels and name are the same, simply add the amount and add it to the array
                                            let newAmt = (amount * -1) + need.amount;
                                            need.amount = newAmt;
                                            // console.log("Adding " + ingredient.name + " here!");
                                        } else {
                                            // if the labels don't match, convert before adding back to the array
                                            let ingredientUnit = math.unit(ingredient.label);
                                            
                                            let itemUnit = math.unit(item.label);
    
                                            // find out if the labels are compatible to generate
                                            if(!itemUnit.equalBase(ingredientUnit)){
                                                // if they aren't, just add to the needs list
                                                let neededObj = {
                                                    amount: (amount * -1),
                                                    name: ingredient.name,
                                                    label: ingredient.label
                                                }

                                                needs.push(neededObj);
                                                
                                                // console.log("Adding " + ingredient.name + " here!");
                                            } else {
                                                // if they are, convert and add to the list
                                                let newLabel = (math.evaluate((amount * -1)+ ' ' + ingredient.label + ' to ' + need.label)).toJSON();
        
                                                need.amount = need.amount + newLabel.value;
                                                
                                                // console.log("Adding " + ingredient.name + " here!");
                                            }
                                        }
            
                                    } else if (needTally === needs.length){
                                        // if the need isn't already in the list, add it
                                        // console.log ("Amount for " + ingredient.name + ": " + amount);
                                        let needObj = {
                                            amount: (amount * -1),
                                            label: ingredient.label,
                                            name: ingredient.name
                                        }
                                        // console.log(needObj.amount);
                                        needs.push(needObj);
                                        
                                        // console.log("Adding " + ingredient.name + " here!");
                                    }
                                });
    
                            }                 
                          
                        } //if it were positive or zero, that means we don't need anymore, so we don't need to add it to the needs list

                    } else {
                        // if the labels don't match, we'll have to convert the amounts before adding it to the needs list

                        let unit1 = math.unit(ingredient.label);
                        let unit2 = math.unit(item.label);
                        // find out if the labels are compatible to generate
                        if(!unit2.equalBase(unit1)){
                            // if they aren't, just add to the needs list
                            needs.push(ingredient);
                        } else {
                            // if they are, convert and add the items

                            let conversion = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + item.label)).toJSON();

                            let amount = item.amount - conversion.value;

                            // console.log(amount, conversion);

                            // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                            if (amount < 0) {

                                // find out if this ingredient type is already in our needs array   
                                if(needs.length === 0) {
                                    let neededObj = {
                                        amount: Math.ceil(amount * -1),
                                        name: ingredient.name,
                                        label: item.label
                                    }
    
                                    needs.push(neededObj);
    
        
                                    // console.log("Adding " + ingredient.name + " here!");

                                } else {
                                    // count the iteration as we go through the needs list
                                    let needTally = 0;
    
                                    // check if the ingredient is already added to needs
                                    needs.forEach(need => {
                                        // count this itereation
                                        needTally ++;
    
                                        // is it in the needs array already?
                                        if(need.name === ingredient.name){
                                            // if yes, find out if the format is the same
                                            if(need.label === ingredient.label){
                                                // if the labels and name are the same, simply add the amount and add it to the array
                                                let newAmt = ingredient.amount + need.amount;
                                                need.amount = newAmt;
                                                
                                                // console.log("Adding " + ingredient.name + " here!");
                                            } else {
                                                // if the labels don't match, convert before adding back to the array
                                                let ingredientUnit = math.unit(ingredient.label);
                                                
                                                let itemUnit = math.unit(item.label);
        
                                                // find out if the labels are compatible to generate
                                                if(!itemUnit.equalBase(ingredientUnit)){
                                                    // if they aren't, just add to the needs list
                                                    let neededObj = {
                                                        amount: Math.ceil(amount * -1),
                                                        name: ingredient.name,
                                                        label: item.label
                                                    }
    
                                                    needs.push(neededObj);
                                                    // console.log("Adding " + ingredient.name + " here!");
                                                } else {
                                                    // if they are, convert and add to the list
                                                    let newLabel = (math.evaluate(Math.ceil(amount * -1) + ' ' + ingredient.label + ' to ' + need.label)).toJSON();
        
                                                    need.amount = need.amount + newLabel.value;
                                                    
                                                    // console.log("Adding " + ingredient.name + " here!");
                                                }
                                            }
                
                                        } else if (needTally === needs.length){
                                            // if the need isn't already in the list, add it
                                            let needObj = {
                                                amount: Math.ceil(amount * -1),
                                                label: item.label,
                                                name: ingredient.name
                                            }
                                            needs.push(needObj);
                                            
                                            // console.log("Adding " + ingredient.name + " here!");
                                        }
                                    });
        
                                }           
                            
                            } //if it were positive or zero, that means we don't need anymore, so we don't need to add it to the needs list
                        }
                    }

                } else {
                    // console.log("here's what's happening now: ", tally);
                    // if this is the final iteration, and there were no matches, we need to add the ingredient to the list, because we have none of it!
                    if(iterations === this.props.data.inventory.length && tally === 0){
                        // if the ingredient names don't match the inventory item, we may need to add something we don't have. Only add it to the needs list if we're sure (aka if we're comparing it to the last ingredient in the inventory to the needed ingredient in question) 
                    

                        // if there's nothing in needs, add it
                        if(needs.length === 0) {
                            needs.push(ingredient);
                            // console.log("Adding " + ingredient.name + " here!");
                        } else {
                            // count the iteration as we go through the needs list
                            let needTally = 0;

                            // check if the ingredient is already added to needs
                            needs.forEach(need => {
                                // count this itereation
                                needTally ++;

                                // is it in the needs array already?
                                if(need.name === ingredient.name){
                                    // if yes, find out if the format is the same
                                    if(need.label === ingredient.label){
                                        // if the labels and name are the same, simply add the amount and add it to the array
                                        let newAmt = ingredient.amount + need.amount;
                                        need.amount = newAmt;
                                        // console.log("Adding " + ingredient.name + " here!");
                                    } else {
                                        // if the labels don't match, convert before adding back to the array
                                        let ingredientUnit = math.unit(ingredient.label);
                                        
                                        let itemUnit = math.unit(item.label);

                                        // find out if the labels are compatible to generate
                                        if(!itemUnit.equalBase(ingredientUnit)){
                                            // if they aren't, just add to the needs list
                                            needs.push(ingredient);
                                            // console.log("Adding " + ingredient.name + " here!");
                                        } else {
                                            // if they are, convert and add to the list
                                            let newLabel = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + need.label)).toJSON();

                                            // console.log(newLabel);

                                            need.amount = need.amount + newLabel.value;
                                            // console.log("Adding " + ingredient.name + " here!");   
                                        }
                                    }
        
                                } else if (needTally === needs.length){
                                    // if the need isn't already in the list, add it
                                    needs.push(ingredient);
                                    // console.log("Adding " + ingredient.name + " here!");
                                }
                            });

                    }
                } 
   
                }
            });
        });
        console.log(needs);
        this.showItems(needs);
    }

    showItems(needs){
        this.setState({needList: needs}, ()=>{
            this.setState({generating: false});
        });
    }

    removeItem(props){
        // look in array for these props

        // take out of the array
    }

    addItem(){

    }

    render(){
        return(<div className="generator">
            <span className="close" onClick={() => this.props.toggle()}>&times;    </span>

            <h1> Shopping List Item Generator</h1>

            <form className="mealPicking" onSubmit={this.generate}>
                           
                           <div className="dates">
                           <h2> Missing Ingredients for: </h2>

                            <div className="datePicker">
                                    <input className="input" name="date" type="date" id="lDate1"/>
                                    
                        
                                    <h4> to </h4>
                    
                                    <input className="input" name="date2" type="date" id="lDate2" />
                            </div>
                                
                                <input type="submit" id="mealFilter" value="Generate"/> 
                           </div>
            </form>
                
                <div className="glist">
                     {!this.state.generating ? <GList needList={this.state.needList}/> : null}
                </div>       
       
        </div>);
    }

}

export default Generator;