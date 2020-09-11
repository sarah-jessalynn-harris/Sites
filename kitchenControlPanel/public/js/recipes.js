var userData;

function addRecipeListeners(){
    $("#addIngredient").click((e)=>{
        e.preventDefault();
        addMoreIngredients();
    });

    $("#addInstruction").click((e)=>{
        e.preventDefault();
        addMoreInstructions();
    });

    $("#addRecipe").click((e)=>{
        e.preventDefault();
        addRecipe();
    });

    $('#file').change((e) => getImageName(e));

    $(".recipeBox").click((e)=>{
        e.preventDefault();
        console.log(e.target.id);
        displayRecipe(e.target.id);
    });

    $('.updateRecipe').click((e)=>{
        e.preventDefault;
        updateRecipe(e.target.id);
    });
    
}

function showRecipes(data){
    console.log(data);

    displayRecipes(data.recipes);

    addRecipeListeners();

    return userData = data;
}

function displayRecipes(recipes){

    if(recipes.length == 0) {
        $("#recipes").append("<h1> You have no recipes yet. Add some to get started! </h1>");
    }

    for(var i=0; i < recipes.length; i++){
        var recipeDiv  = `<button class="recipeBox" id="${i}">${recipes[i].name}</button>`;

        $('#recipes').append(recipeDiv);
    }

    var addRecipes = `<button onclick="window.location.href='addRecipe.html'"> Add a Recipe</button>`;

    $('#recipes').append(addRecipes);
    
}

function displayRecipe(id){

    var recipeData = userData.recipes[id];

    var recipeDataDiv = `<div class="recipeData"><div class="title"><h1>${recipeData.name}</h1><img src="${recipeData.image}" alt="${recipeData.name}"/><p>${recipeData.description}</p></div><div class="recipeRightSide"><div class="listRecipeData"> <div class="ingredientsDisplay"><h3>Ingredients</h3></div><div class="instructionsDisplay"><h3>Instructions</h3></div></div></div></div>`;

    $('#recipes').html(recipeDataDiv);

    
    for(var i = 0; i < recipeData.ingredients.length; i++) {
        
        var ingredient = `<p>${recipeData.ingredients[i].amount + " " + recipeData.ingredients[i].label + " " + recipeData.ingredients[i].name}</p>`;

        $(".ingredientsDisplay").append(ingredient);
    }

    for(var x = 0; x < recipeData.instructions.length; x++) {
        
        var instruction = `<div class="instructionsWrapper">
        <p>Step ${x + 1}: </p> &nbsp; <p>${recipeData.instructions[x]}</></div>`;

        $(".instructionsDisplay").append(instruction);
    }

    var recipeOptions = `<div class="recipeOptions"><button class="editRecipe" id="${id}">Edit </button><button class="deleteRecipe" id="${id}"> Delete </button></div>`;

    $(".recipeRightSide").append(recipeOptions);

    $('.editRecipe').click((e)=>{
        e.preventDefault;
        editRecipe(e.target.id);
    });

    $('.deleteRecipe').click((e)=>{
        e.preventDefault;
        deleteRecipe(e.target.id);
    });
    
}

function editRecipe(id) {
    var form = `
    <div class="form recipeForms">
      <h1> Edit Recipe </h1>
      <label for="name"> Name: </label>
      <input name="name" type="text" id="name" placeholder="Recipe Name" value="${userData.recipes[id].name}">

      <label for="description"> Description: </label>
      <input name="description" type="text" id="description" placeholder="Recipe Description" value="${userData.recipes[id].description}">
      
      <h3> Enter Ingredients </h3>

      <div class="ingredientBox">

        
       
      </div>

      <button id='addIngredient' class='moreFields'> Add Another Ingredient </button>

      <h3> Enter Instructions </h3>
      <div class="instructions">
      
      </div>

      <button id='addInstruction' class='moreFields'> Add Another Instruction </button>

      <h3> Attach an Image</h3>
      

      <div class="files">
          <label for="file" id="inputFile">Choose File</label>
          <input name='file' id='file' type='file' value='Attach File'/>
          <input type='text' id='image' placeholder='Recipe Image' value="${userData.recipes[id].image}" readonly> 
      </div>

      <div id='fileBox'>
        <input type="text" id="imageUrl" value="${userData.recipes[id].image}" readonly/>
      </div>

      <div class="buttons">
        <button id="${id}" class="updateRecipe"> Submit</button>
        <button id="cancel" onclick="window.location.href='recipes.html'"> Cancel </button>

        
    </div>
    </div>`;

    $('#recipes').html(form);

    for(var a = 0; a < userData.recipes[id].ingredients.length; a ++){

        var ingredientInputs = `<div class="ingredient" id='ingredient${a + 1}'>
    <input type='number'  placeholder='Ingredient #${a + 1} amount' min="0.25" step="0.25" value="${userData.recipes[id].ingredients[a].amount}">
    <select name="units" id="unit${a + 1}">
      <option value="teaspoon" ${"teaspoon" == userData.recipes[id].ingredients[a].label ? "selected" : ""}">teaspoon</option>
      <option value="tablespoon" ${"tablespoon" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>tablespoon</option>
      <option value="liter" ${"liter" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>liter</option>
      <option value="cup" ${"cup" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>cup</option>
      <option value="pint" ${"pint" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>pint</option>
      <option value="quart" ${"quart" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>quart</option>
      <option value="gallon" ${"gallon" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>gallon</option>
      <option value="gram" ${"gram" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>gram</option>
      <option value="ounce" ${"ounce" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>ounce</option>
      <option value="lbs" ${"lbs" == userData.recipes[id].ingredients[a].label ? "selected" : ""}>lbs</option>
    </select>
    <input name="label" type="text" id="label" placeholder="Ingredient Name" value="${userData.recipes[id].ingredients[a].name}">
</div>`;

        $('.ingredientBox').append(ingredientInputs);
    }



    for(var b = 0; b < userData.recipes[id].instructions.length; b ++) {
        var instructionsInput = `<input type='text' id='instruction${b + 1}' placeholder='Instruction #${b + 1}' value="${userData.recipes[id].instructions[b]}">`;

        $('.instructions').append(instructionsInput);
    }

    addRecipeListeners();

}

function updateRecipe(id){
    if ($('#name').val() == "" || $('#description').val() == "" || $('#ingredient1 input').val() == "" || $('#instruction1 input').val() == "") {
        return alert('You must fill out all fields before creating a recipe, including at least Ingredient #1 and Instruction #1.');
    }

    var name = $('#name').val();
    var description = $('#description').val();

    
    var rawAmounts = [];
    var rawLabels = [];
    var rawNames = [];

    var ingredientBox = document.body.querySelector('.ingredientBox');

    var isOdd = function(x) { return x & 1; };

    for(var i=0; i < ingredientBox.children.length; i++){
        for(var x=0; x < ingredientBox.children[i].children.length; x++){
            console.log(x);
             if(x == 0) {
                rawAmounts.push(Number(ingredientBox.children[i].children[x].value));
             } else {
                if(isOdd(x)) {
                    rawLabels.push(ingredientBox.children[i].children[x].value);
                } else {
                    rawNames.push(ingredientBox.children[i].children[x].value);
                }
             } 
        }
    }

    var ingredients = [];

    for(var y = 0; y < rawAmounts.length; y++){
       var ingredientObj = {
           amount: rawAmounts[y],
           label: rawLabels[y],
           name: rawNames[y]
       }

       ingredients.push(ingredientObj);
    }

    var instructions = [];

    var instructionBox = document.body.querySelector('.instructions');

    for(var z = 0; z < instructionBox.children.length; z++){
        instructions.push(instructionBox.children[z].value);
    }

    if ($('#image').val() == "") {
        var imageLink = "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/recipeImages%2Fdefault.jpg?alt=media&token=9abb9b44-48f6-4af1-a4b5-074d31976cc2";
 
     } else {
        var imageLink = $('#imageUrl').val();
     }


    var recipeObj = {
        name : name,
        description : description,
        ingredients: ingredients,
        instructions: instructions,
        image : imageLink
    }

    console.log(recipeObj);

    FIREBASE_RECIPE_UTILITY.updateRecipe(recipeObj, userData.userData.id, id);
}

function deleteRecipe(id){
    FIREBASE_RECIPE_UTILITY.deleteRecipe(id, userData.userData.id);
}

function addRecipe() {
    if ($('#name').val() == "" || $('#description').val() == "" || $('#ingredient1 input').val() == "" || $('#instruction1 input').val() == "") {
        return alert('You must fill out all fields before creating a recipe, including at least Ingredient #1 and Instruction #1.');
    }

    var name = $('#name').val();
    var description = $('#description').val();

    
    var rawAmounts = [];
    var rawLabels = [];
    var rawNames = [];

    var ingredientBox = document.body.querySelector('.ingredientBox');

    var isOdd = function(x) { return x & 1; };

    for(var i=0; i < ingredientBox.children.length; i++){
        for(var x=0; x < ingredientBox.children[i].children.length; x++){
            console.log(x);
             if(x == 0) {
                rawAmounts.push(Number(ingredientBox.children[i].children[x].value));
             } else {
                if(isOdd(x)) {
                    rawLabels.push(ingredientBox.children[i].children[x].value);
                } else {
                    rawNames.push(ingredientBox.children[i].children[x].value);
                }
             } 
        }
    }

    var ingredients = [];

    for(var y = 0; y < rawAmounts.length; y++){
       var ingredientObj = {
           amount: rawAmounts[y],
           label: rawLabels[y],
           name: rawNames[y]
       }

       ingredients.push(ingredientObj);
    }

    var instructions = [];

    var instructionBox = document.body.querySelector('.instructions');

    for(var z = 0; z < instructionBox.children.length; z++){
        instructions.push(instructionBox.children[z].value);
    }

    if ($('#image').val() == "") {
        var imageLink = "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/recipeImages%2Fdefault.jpg?alt=media&token=9abb9b44-48f6-4af1-a4b5-074d31976cc2";
 
     } else {
        var imageLink = $('#imageUrl').val();
     }


    var recipeObj = {
        name : name,
        description : description,
        ingredients: ingredients,
        instructions: instructions,
        image : imageLink
    }

    console.log(recipeObj);

    FIREBASE_RECIPE_UTILITY.addRecipe(recipeObj, userData.userData.id);
    
}

//get the image name so that the file input is not ugly
function getImageName(e){
    
    var file = e.target.files[0];

    var fileName = file.name;

   $('#image').val(fileName);

   FIREBASE_RECIPE_UTILITY.uploadFile(file, userData.userData.uid);
}

//get actual firebase url for image
function getImageUrl(url){

    var imgUrl = `<input type="text" id="imageUrl" value='${url}' readonly/>`;
    

    $('#fileBox').html(imgUrl);
}

function addMoreIngredients(){
   var lastField = $('.ingredientBox div').last();

   var intId = lastField[0].id;

   var newId = intId.replace('ingredient', '');

   var indexNumber = parseInt(newId) + 1;

   var newIngredient = `<div class="ingredient" id='ingredient${indexNumber}'>
   <input type='number'  placeholder='Ingredient #${indexNumber} amount' min="0.25" step="0.25">
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
     <option value="lbs">lbs</option>
   </select>
   <input name="label" type="text" id="label" placeholder="Ingredient Name">
</div>
`;

    $('.ingredientBox').append(newIngredient);

}

function addMoreInstructions(){
    var lastField = $('.instructions input').last();
 
    var intId = lastField[0].id;

    var newId = intId.replace('instruction', '');
 
    var indexNumber = parseInt(newId) + 1;
 
    var newIngredient = `<input type='text' id='instruction${indexNumber}' placeholder='Instruction #${indexNumber}'>`;
 
     $('.instructions').append(newIngredient);
 
 }



$(document).ready(() => {
   MINI_ACCOUNT_UTILITY.addAccountListeners();

   MINI_ACCOUNT_UTILITY.getCurrentUser();

   

});