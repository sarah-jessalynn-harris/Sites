import React, {Component} from "react";
 class PantryForm extends Component {

    render(){
        if(this.props.type === "new"){
            return(
            <div>
                <form className="form recipeForms ingredientForm" onSubmit = {this.props.onSubmit}>

                    <div className="ingredientBox">
                    
                        <h1> Add Item to Pantry</h1>

                        <div className="ingredient" id='ingredient1'>
                            <input type='number' placeholder='Ingredient amount' min="0.25" step="0.25"/>
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
                            <option defaultValue="unit">unit</option>
                            </select>
                            <input name="label" type="text" id="label" placeholder="Ingredient Name"/>
                        </div>
                    
                    </div>

                    <div className="buttons">
                        <button type="submit" id="addRecipe"> Submit</button>
                    </div>
                </form>
            </div>
            );
        } else if (this.props.type === "edit"){
            return(
            <div>
                
                <form className="form recipeForms ingredientForm" onSubmit = {this.props.onSubmit} id={this.props.itemId}>
                        <div className="ingredientBox">
                        <h1>Edit Pantry Item</h1>
                            <div className="ingredient" id={'ingredient'} >
                                <input type='number'  placeholder={'Ingredient amount'} min="0.25" step="0.25" defaultValue={this.props.pantryData.amount} />
                                <select name="units" id={"unit"} defaultValue={this.props.pantryData.label}>
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
                                    <option defaultValue="unit">unit</option>
                                </select>
                                <input name="label" type="text" id="label" placeholder="Ingredient Name" defaultValue={this.props.pantryData.name} />
                            </div>
                            <div className="buttons">
                                <button type="submit" id="addRecipe"> Submit</button>
                            </div>
                        </div>
                </form>
            </div>
            );
        }
    }
 }

 export default PantryForm;