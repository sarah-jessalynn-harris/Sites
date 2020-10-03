import React, {Component} from "react";


const RecipeForm = ({onSubmit}) => {

  
        return(
        <div>

            <form className="form recipeForms" onSubmit = {onSubmit}>
                <h1> New Recipe </h1>
                <label htmlFor="name"> Name: </label>
                <input name="name" type="text" id="name" placeholder="Recipe Name"/>

                <label htmlFor="description"> Description: </label>
                <input name="description" type="text" id="description" placeholder="Recipe Description"/>
                
                <h3> Enter Ingredients </h3>

                <div className="ingredientBox">

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

                <button id='addIngredient' className='moreFields'> Add Another Ingredient </button>

                <h3> Enter Instructions </h3>
                <div className="instructions">
                    <input type='text' id='instruction1' placeholder='Instruction #1'/>
                </div>

                <button id='addInstruction' className='moreFields'> Add Another Instruction </button>

                <h3> Attach an Image</h3>
                

                <div className="files">
                    <label htmlFor="file" id="inputFile">Choose File</label>
                    {/* <input name='file' id='file' type='file' defaultValue='Attach File'/> */}
                    <input type='text' id='image' placeholder='Recipe Image' readOnly/> 
                </div>

                <div id='fileBox'></div>

                <div className="buttons">
                    <button type="submit" id="addRecipe"> Submit</button>
                </div>
            </form>   
        </div>
        );
        
}



export default RecipeForm;