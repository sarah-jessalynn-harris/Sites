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
        var extractedIngredients = [];

        console.log(extractedIngredients);
        // go through each planned recipe id
        plans.forEach(plan =>{
            // find the recipe from the database that matches the id
            this.props.data.recipes.forEach(recipe => {
                // if they match, go through each needed ingredient and add it to the list
                if(recipe.id === plan){
                    recipe.ingredients.forEach(ingredient =>{
                        console.log("ingredient from plan:", ingredient);

                        //if this is the first entry into the extractedIngredients array, just add it
                        if(extractedIngredients.length === 0){
                            extractedIngredients.push(ingredient);
                        } else {
                            //using findIndex
                            let arrayId = extractedIngredients.findIndex(object => object.name === ingredient.name);
                             console.log(arrayId);

                            // if the ingredient type is in the array already, add amounts or if not, just add it to the list
                            if(arrayId === -1){
                                //if it isn't we can just add it    
                                extractedIngredients.push(ingredient);
                                console.log("just adding: ", ingredient);
                            } else {
                                // add up the amounts before adding it to the array
                                let arrayObj = extractedIngredients[arrayId];
                                console.log("already in array: ", arrayObj);

                                let ingredientUnit = math.unit(ingredient.label);
                                                
                                let itemUnit = math.unit(arrayObj.label);

                                // if it is, we need to see if the units are compatable
                                if(arrayObj.label === ingredient.label){
                                
                                    var amt = ingredient.amount + arrayObj.amount;

                                    extractedIngredients.splice(arrayId, 1, {
                                        name: ingredient.name,
                                        label: ingredient.label,
                                        amount: amt
                                    });
                                } else if(itemUnit.equalBase(ingredientUnit)){
                                    console.log("needs conversion: ", ingredient);
                                    // if they are, convert and add to the list
                                    let newLabel = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + arrayObj.label)).toJSON();
                                    // console.log(ingredient, newLabel);
                                    let newAmount  = arrayObj.amount + newLabel.value; 

                                    // console.log(ingredient, arrayObj, newAmount);

                                    extractedIngredients.splice(arrayId, 1, {
                                        name: ingredient.name,
                                        label: newLabel.unit,
                                        amount: math.round(100*newAmount)/100
                                    });
                                
                                    // console.log(ingredient, arrayObj);                            
                                } else if(!itemUnit.equalBase(ingredientUnit)){
                                    // if they aren't, see if there's another match
                                    var indexes = [];
                            
                                    for(var i = 0; i < extractedIngredients.length; i++){

                                        if (extractedIngredients[i].name === ingredient.name){
                                            indexes.push(i);
                                        }
                                    }
                                    
                                    console.log(indexes);

                                    for(var x = 0; x < indexes.length; x++){
                                        let indexUnit = math.unit(extractedIngredients[x].label);
                                        console.log(indexUnit, ingredientUnit, indexUnit.equalBase(ingredientUnit));
                                        if(indexUnit.equalBase(ingredientUnit)){
                                            // if they are, convert and add to the list
                                            let newLabel = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + extractedIngredients[x].label)).toJSON();
                                            // console.log(ingredient, newLabel);
                                            let newAmount  = extractedIngredients[x].amount + newLabel.value; 

                                            // console.log(ingredient, arrayObj, newAmount);

                                            extractedIngredients.splice(arrayId, 1, {
                                                name: ingredient.name,
                                                label: newLabel.unit,
                                                amount: math.round(100*newAmount)/100
                                            });
                                            console.log("converted here")
                                            break;
                                        } else {
                                            // just add to the needs list if there's no compatible match
                                            // extractedIngredients.push(ingredient);

                                        }
                                    }

                                }
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
                
                // if there's a match in the inventory and a planned ingredient, find out how much is in the pantry to see if we have enough
                if(ingredient.name === item.name){
                    // count the iteration of the forEach for inventory items that matched our plan ingredients
                    tally++;

                    // if the ingredient name matches, that means we have some of this ingredient already. We need to find out if we need more or not. Start by finding out if the labels match too
                    if(ingredient.label === item.label){
                        // if the labels are the same, we can easily calculate the amount
                        let amount = item.amount - ingredient.amount;

                        // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                        if (amount < 0) {
                            // but before we add it, we have to see if this ingredient type is already in the needs list so we can add it to an existing entry, or add it to the list as a new item type  
                            this.addToNeeds(math.ceil(amount * -1), ingredient.label, ingredient.name, needs);
                          
                        } //if it were positive or zero, that means we don't need anymore, so we don't need to add it to the needs list

                    } else {
                        // if the labels don't match, we'll have to convert the amounts before adding it to the needs list

                        let unit1 = math.unit(ingredient.label);
                        let unit2 = math.unit(item.label);
                        // find out if the labels are compatible to generate
                        if(!unit2.equalBase(unit1)){
                            // if they aren't, just add to the needs list
                            
                            // find out if this ingredient type is already in our needs array so we can add it  
                            this.addToNeeds(ingredient.amount, ingredient.label, ingredient.name, needs);  
                        } else {
                            // if they are, convert and add the items

                            let conversion = (math.evaluate(ingredient.amount + ' ' + ingredient.label + ' to ' + item.label)).toJSON(); //*****

                            let amount = item.amount - conversion.value;

                            // console.log(amount, conversion);

                            // if the difference is negative, then we don't have enough of the ingredient and we have to add it to the needs list
                            if (amount < 0) {

                                // find out if this ingredient type is already in our needs array so we can add it
                                this.addToNeeds(math.ceil(amount * -1), item.label, ingredient.name, needs);        
                            
                            } //if it were positive or zero, that means we don't need anymore, so we don't need to add it to the needs list
                        }
                    }

                } else {
                    // if this is the final iteration, and there were no matches, we need to add the ingredient to the list, because we have none of it!
                    if(iterations === this.props.data.inventory.length && tally === 0){
                        
                        // find out if this ingredient type is already in our needs array so we can add it  
                        this.addToNeeds(ingredient.amount, ingredient.label, ingredient.name, needs);   
          
                     } 
   
                }
            });
        });
        // console.log(needs);
        // this.showItems(needs);
    }

    addToNeeds(amount, label, name, needs){
        // find out if this ingredient type is already in our needs array   
        if(needs.length === 0) {
        // if it's the first iteration of needs, just add this as the first item in the needs array
        let neededObj = {
            amount: amount,
            name: name,
            label: label
        }

        needs.push(neededObj);

        } else {
            // count the iteration as we go through the needs list
            let needTally = 0;

            // check if the ingredient is already added to needs
            needs.forEach((need, index) => {
                // count this itereation
                needTally ++;

                // is it in the needs array already?
                if(need.name === name){
                    // if yes, find out if the format is the same
                    if(need.label === label){
                        
                        // if the labels and name are the same, simply add the amount and add it to the array
                        let newAmt = amount + need.amount;

                        console.log(index, need, amount, label, newAmt);

                        needs.splice( index, 1, {
                                amount: newAmt,
                                name: name,
                                label: label
                        });
                        
                    } else {
                        // if the labels don't match, convert before adding back to the array
                        let ingredientUnit = math.unit(label);
                        
                        let needUnit = math.unit(need.label);

                        

                        // find out if the labels are compatible to convert
                        if(!needUnit.equalBase(ingredientUnit) && needTally === needs.length){
                            // if they aren't, just add to the needs list
                            let neededObj = {
                                amount: amount,
                                name: name,
                                label: label
                            }

                            needs.push(neededObj);
                        } else if (needUnit.equalBase(ingredientUnit)){

                            console.log(need.label);
                            // if they are compatible, convert and add to the list
                            let newLabel = (math.evaluate(Math.ceil(amount * -1) + ' ' + label + ' to ' + need.label)).toJSON(); //*****

                            
                            console.log("newLabel =", newLabel);

                            need.amount = need.amount + newLabel.value; //*****
                            
                        }
                    }

                } else if (needTally === needs.length && need.name !== name){
                    // if the need isn't already in the list, add it
                    let needObj = {
                        amount: amount,
                        label: label,
                        name: name
                    }
                    needs.push(needObj);
                } 
            });

        }  

        console.log(needs);
        this.showItems(needs);
    }

    showItems(needs){
        this.setState({needList: needs}, ()=>{
            this.setState({generating: false});
        });
    }

    // remove item from generated list
    removeItem(obj){
        // look in array for these props
        var id = this.state.needList.findIndex(element => element.name === obj.name && element.label === obj.label);

        console.log(id);
        // take out of the array
        var array = this.state.needList;
        array.splice(id, 1);
        console.log(array);
        this.setState({needList: array});
    }



    render(){
        return(<div className="generator">
            <span className="close" onClick={() => this.props.toggle()}>&times;    </span>

            <h1> Shopping List Item Generator</h1>

            <p> To generate your shopping list items, enter a start and end date below. We'll give you a list of missing ingredients from your meal plan between those dates, and you can choose if you'd like to add it to your shopping list.</p>

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
                     {!this.state.generating ? <GList obj={(obj)=> this.removeItem(obj)} needList={this.state.needList} id={this.props.id}/> : null}
                </div>    

                <div className="gListFooter"></div>   
       
        </div>);
    }

}

export default Generator;