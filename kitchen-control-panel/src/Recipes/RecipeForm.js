import React, {Component} from "react";
import firebase from 'firebase';

 class RecipeForm extends Component {
  
    addIngredient = function(e){
        e.preventDefault();
        let lastId = document.getElementsByClassName('ingredientBox')[0].lastChild.id;
    
        var newId = lastId.replace('ingredient', '');
        var indexNumber = parseInt(newId) + 1;
    
        var newIngredient = document.createElement("div");
        newIngredient.className = "ingredient";
        newIngredient.id = "ingredient" + indexNumber;
        newIngredient.innerHTML = `<input type='number'  placeholder='Ingredient #${indexNumber} amount' min="0.25" step="0.25">
        <select name="units" id="unit${indexNumber}">
          <option value="teaspoon">teaspoon</option>
          <option value="tablespoon">tablespoon</option>
          <option value="liter">liter</option>
          <option value="cup">cup</option>
          <option value="pint">pint</option>
          <option value="quart">quart</option>
          <option value="gallon">gallon</option>
          <option value="gram">gram</option>
          <option value="ounce">ounce</option>
          <option value="floz">floz</option>
          <option value="lbs">lbs</option>
          <option defaultValue="unit">unit</option>
        </select>
        <input name="label" type="text" id="label" placeholder="Ingredient Name">
     </div>
     `;
     
         document.getElementsByClassName('ingredientBox')[0].appendChild(newIngredient);
    }
    
    addInstruction = function(e) {
        e.preventDefault();
        let lastId = document.getElementsByClassName('instructions')[0].lastChild.id;
    
        var newId = lastId.replace('instruction', '');
        var indexNumber = parseInt(newId) + 1;
    
        var newInstruction = document.createElement('input');
    
        newInstruction.type = "text";
        newInstruction.id = "instruction" + indexNumber;
        newInstruction.placeholder = "Instruction #" + indexNumber;
    
        document.getElementsByClassName('instructions')[0].appendChild(newInstruction);
    }
    
    //get the image name so that the file input is not ugly
    getImageName = function(e){
        
        var file = e.target.files[0];

        document.getElementById('fileBox').innerHTML= "Please wait while we upload your file...";  
    
        var fileName = file.name;
    
        document.getElementById('image').value= fileName;
    
        this.uploadFile(file, this.props.uid);
    }
    
    //upload the file to firebase storage
    uploadFile = function(file, uid){
        var fileName = file.name;
    
         // this is a reference to Firebase storage for uploading images
         var storageRef = firebase.storage().ref( uid + '/recipeImages/' + fileName);
      
         var uploadTask = storageRef.put(file);
      
         uploadTask.on('state_changed', function(snapshot){
      
         }, function(error) {
      
          console.log(error);
      
         }, function() {
           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            var imgUrl = `<a class='urlPreview' id='urlPreview' href='${downloadURL}' target='_blank' rel="noopener noreferrer"> Image Preview </a>`;
        
            document.getElementById('fileBox').innerHTML= imgUrl;  
           });
         });
      }


    render(){

       
        if(this.props.type === "new") {
            return(
            <div>

                <form className="form recipeForms" onSubmit = {this.props.onSubmit}>
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
                            <option defaultValue="floz">floz</option>
                            <option defaultValue="lbs">lbs</option>
                            <option defaultValue="unit">unit</option>
                            </select>
                            <input name="label" type="text" id="label" placeholder="Ingredient Name"/>
                        </div>
                    
                    </div>

                    <button id='addIngredient' className='moreFields' onClick={(e) => this.addIngredient(e)}> Add Another Ingredient </button>

                    <h3> Enter Instructions </h3>
                    <div className="instructions">
                        <input type='text' id='instruction1' placeholder='Instruction #1'/>
                    </div>

                    <button id='addInstruction' className='moreFields' onClick={(e) => this.addInstruction(e)}> Add Another Instruction </button>

                    <h3> Attach an Image</h3>
                    

                    <div className="files">
                        <label htmlFor="file" id="inputFile">Choose File</label>
                        <input name='file' id='file' type='file'  onChange={(e) => this.getImageName(e)}/>
                        <input type='text' id='image' placeholder='Recipe Image' readOnly/> 
                    </div>

                    <div id='fileBox'></div>

                    <div className="buttons">
                        <button type="submit" id="addRecipe"> Submit</button>
                    </div>
                </form>   
            </div>
            );
        } else if (this.props.type === "edit") {
            return(
                <div>
    
                    <form className="form recipeForms" onSubmit = {this.props.onSubmit} id = {this.props.itemId}>
                        <h1> Edit Recipe </h1>
                        <label htmlFor="name"> Name: </label>
                        <input name="name" type="text" id="name" placeholder="Recipe Name" defaultValue={this.props.recipeData.name}/>
    
                        <label htmlFor="description"> Description: </label>
                        <input name="description" type="text" id="description" placeholder="Recipe Description" defaultValue={this.props.recipeData.description}/>
                        
                        <h3> Enter Ingredients </h3>
    
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
                                                <option defaultValue="floz">floz</option>
                                                <option defaultValue="lbs">lbs</option>
                                                <option defaultValue="unit">unit</option>
                                            </select>
                                            <input name="label" type="text" id="label" placeholder="Ingredient Name" defaultValue={item.name} />
                                        </div>
                                    );
                                })
                            
                            }
                        
                        </div>
    
                        <button id='addIngredient' className='moreFields' onClick={(e) => this.addIngredient(e)}> Add Another Ingredient </button>
    
                        <h3> Enter Instructions </h3>
                        <div className="instructions">
                            {
                                this.props.recipeData.instructions.map((item, key) => {
                                    return (
                                        <input type='text' id={'instruction' + (key + 1)} key ={key} placeholder={'Instruction #' + (key + 1)} defaultValue={item} />
                                    );
                                })
                            }
                        </div>
    
                        <button id='addInstruction' className='moreFields' onClick={(e) => this.addInstruction(e)}> Add Another Instruction </button>
    
                        <h3> Attach an Image</h3>
                        
    
                        <div className="files">
                            <label htmlFor="file" id="inputFile">Choose File</label>
                            <input name='file' id='file' type='file'  onChange={(e) => this.getImageName(e)}/>
                            <input type='text' id='image' placeholder='Recipe Image' readOnly/> 
                        </div>
    
                        <div id='fileBox'>
                            <a className='urlPreview' id='urlPreview' href={this.props.recipeData.image} target='_blank'  rel="noopener noreferrer"> Image Preview </a>
                        </div>
    
                        <div className="buttons">
                            <button type="submit" id="addRecipe"> Submit</button>
                        </div>
                    </form>   
                </div>
                );
        }
    } 
}



export default RecipeForm;