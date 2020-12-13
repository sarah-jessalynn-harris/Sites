import React, {Component} from "react";
import {add, format, isAfter, isBefore, isEqual, isValid} from "date-fns";

 class PlanForm extends Component {

    render(){
        if(this.props.type === "new"){
            return(
            <div>
                <form className="form recipeForms mealForm" onSubmit = {this.props.onSubmit}>
                        <h1> New Meal </h1>
                        <label htmlFor="date"> Date: </label>
                        <input name="date" type="date" id="date"/>

                        <label htmlFor="slot"> Meal Type:</label>
                        <select name="slot" id="slot">
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                        </select>

                        <label htmlFor="recipeChoice"> Recipe:</label>
                        <div className="mealRecipes">
                            
                            <select name="recipeChoice" id="recipeChoice">
                                {
                                    this.props.recipes.map((recipe, key) => {
                                        return <option key={key} value={recipe.id}>{recipe.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="buttons">
                            <button className="options" type="submit"> Submit</button>
                        </div>

                </form>
            </div>
            );
        } else if (this.props.type === "edit"){
            return(
            <div>
                <form id={this.props.itemId} className="form recipeForms mealForm" onSubmit = {this.props.onSubmit}>
                    <h1>Edit Pantry Item</h1>
                        <label htmlFor="date"> Date: </label>
                        <input name="date" type="date" id="date" defaultValue={format(new Date(this.props.planData.date), "yyyy-MM-dd")} />

                        <label htmlFor="slot"> Meal Type:</label>
                        <select name="slot" id="slot" defaultValue={this.props.planData.slot} >
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                        </select>

                        <label htmlFor="recipeChoice"> Recipe:</label>
                        <div className="mealRecipes">
                            
                            <select name="recipeChoice" id="recipeChoice" defaultValue={this.props.planData.recipe}>
                                {
                                    this.props.recipes.map((recipe, key) => {
                                        return <option key={key} value={recipe.id}>{recipe.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="buttons">
                            <button className="options" type="submit"> Submit</button>
                        </div>

                </form>
            </div>
            );
        }
    }
 }

 export default PlanForm;