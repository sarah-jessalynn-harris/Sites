import React, {Component} from "react";
import firebase from 'firebase';

 class PantryForm extends Component {

    render(){
        if(this.props.type == "new"){
            <div>
                <form className="form recipeForms" onSubmit = {this.props.onSubmit}>

                    <div className="ingredientBox">
                    
                        <h1> Add Item to Pantry</h1>

                        <div className="ingredient" id='ingredient1'>
                            <input type='number' placeholder='Ingredient #1 amount' min="0.25" step="0.25"/>
                            <select name="units" id="unit1">
                            <option defaultValue="teaspoon">teaspoon</option>
                            <option defaultValue="tablespoon">tablespoon</option>
                            <option defaultValue="liter">liter</option>
                            <option defaultValue="cup">cup</option>
                            <option defaultValue="pint">pint</option>
                            <option defaultValue="quart">quart</option>
                            <option defaultValue="gallon">gallon</option>
                            <option defaultValue="gram">gram</option>
                            <option defaultValue="ounce">ounce</option>
                            <option defaultValue="lbs">lbs</option>
                            </select>
                            <input name="label" type="text" id="label" placeholder="Ingredient Name"/>
                        </div>
                    
                    </div>

                </form>
            </div>
        } else if (this.props.type == "edit"){
            <div>
                <h1>Edit Pantry Item</h1>
                <form className="form recipeForms" onSubmit = {this.props.onSubmit}>
                        <div className="ingredientBox">
    
                            {
                                this.props.recipeData.ingredients.map((item, key) => {
                                    return( 
                                        <div className="ingredient" id={'ingredient' + (key + 1)} key = {key}>
                                            <input type='number'  placeholder={'Ingredient #' + (key + 1) + ' amount'} min="0.25" step="0.25" defaultValue={item.amount} />
                                            <select name="units" id={"unit" + (key + 1)} defaultValue={item.label}>
                                                <option defaultValue="teaspoon">teaspoon</option>
                                                <option defaultValue="tablespoon">tablespoon</option>
                                                <option defaultValue="liter">liter</option>
                                                <option defaultValue="cup">cup</option>
                                                <option defaultValue="pint">pint</option>
                                                <option defaultValue="quart">quart</option>
                                                <option defaultValue="gallon">gallon</option>
                                                <option defaultValue="gram"> gram</option>
                                                <option defaultValue="ounce">ounce</option>
                                                <option defaultValue="lbs">lbs</option>
                                            </select>
                                            <input name="label" type="text" id="label" placeholder="Ingredient Name" defaultValue={item.name} />
                                        </div>
                                    );
                                })
                            
                            }
                        
                        </div>

                </form>
            </div>
        }
    }
 }

 export default PantryForm;