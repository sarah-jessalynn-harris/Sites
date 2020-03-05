//add listeners to buttons
function initListeners() {
  
    //listener for the home button
    $('.index').click(function(){
        
        var sectionData = SERVER.getSection('home');

        $(document.body).removeClass().addClass('homeBackground');

        $('.content').html(sectionData);

    });

    //create button listener
    $('.create').click(function(){

        var sectionData = SERVER.getSection('create');

        $(document.body).removeClass().addClass('otherBackground');

        $('.content').html(sectionData);

        $('#plusOne').click(addMoreIngredients);

        $('#plusTwo').click(addMoreInstructions);

        $('#addRecipe').click(addRecipe);

        $('#file').change((e) => getImageName(e));

    }); 

    //listener for login button
    $('.login').click(function(){

        var sectionData = SERVER.getSection('login');

        $(document.body).removeClass().addClass('loginBackground');

        $('.content').html(sectionData);

        loginListener();

    }); 

    //listener for recipes button
    $('.your').click(function(){

        var sectionData = SERVER.getSection('your');

        $(document.body).removeClass().addClass('recipeBackground');

        $('.content').html(sectionData);

        FIREBASE_UTILITY.getRecipes(processRecipes);

    }); 
}

//get specific recipe information
function view(id) {
    FIREBASE_UTILITY.getRecipe(id);
}

//function to add listeners to login page
function loginListener() {
    $('#login').click(function(){
        
        let email = $('#emailLogin').val();
        let password = $('#passwordLogin').val(); 

        if(email == "" || password =="") {
            alert("You must fill all fields before proceeding");
        } else {
            console.log("Email:", email, " Password:", password);
        }
    });

    $('#signup').click(function(){
        
        let firstname = $('#firstName').val();
        let lastname = $('#lastName').val(); 
        let email = $('#email').val();
        let password = $('#password').val(); 

        if(email == "" || password =="" || firstname == "" || lastname == "") {
            alert("You must fill all fields before proceeding");
        } else {
        
            console.log("First Name:",firstname, " Last Name:", lastname, " Email:", email, " Password:", password);

        }

    });
}

//add more ingredient fields in create/edit
function addMoreIngredients(){
        var lastField = $("#ingredientBox input").last();
    
        var intId =  lastField[0].id;

        var newId = intId.replace('ingredient', '');

        var indexNumber = parseInt(newId) + 1;

        var newIngredient = `<input type="text" id="ingredient${indexNumber}" placeholder="Ingredient #${indexNumber}"/>`;

        $("#ingredientBox").append(newIngredient);
};

//add more instruction fields in create/edit
function addMoreInstructions(){
    var lastField = $("#instructionBox input").last();
    
    var intId =  lastField[0].id;

    var newId = intId.replace('instruction', '');

    var indexNumber = parseInt(newId) + 1;

    var newInstruction = `<input type="text" id="instruction${indexNumber}" placeholder="Instruction #${indexNumber}"/>`;

    $("#instructionBox").append(newInstruction);
};

//go to edit recipe page
function editRecipe(id){

    FIREBASE_UTILITY.getRecipeEdit(id);

    sectionData = SERVER.getSection('edit');

    $(document.body).removeClass().addClass('otherBackground');

    $('.content').html(sectionData);

    $('#plusOne').click(addMoreIngredients);

    $('#plusTwo').click(addMoreInstructions);

    $('#file').change((e) => getImageName(e));
}

//filter editable recipe data for editting
function edit(recipe, id){

    var imgUrl = `<input type="text" id="imageUrl" value='${recipe.image}' readonly/>`;
    

    $('#fileBox').html(imgUrl);

    for(var i = 0; i < (recipe.ingredients.length - 3); i ++){
        addMoreIngredients();

    }

    for(var i = 0; i < (recipe.ingredients.length); i ++){

        $('#ingredient' + (i + 1)).val(recipe.ingredients[i]);
    }

    for(var i = 0; i < (recipe.instructions.length - 3); i ++){
        addMoreInstructions();
    }

    for(var i = 0; i < recipe.instructions.length; i ++){
        
        $('#instruction' + (i + 1)).val(recipe.instructions[i]);
    }

    $('#recipeName').val(recipe.name);
    $('#recipeDescription').val(recipe.description);
    $('#recipeTotalTime').val(recipe.time);
    $('#recipeServingSize').val(recipe.servings);
    $('#recipeId').val(id);

}

function updateRecipe(){

    if ($('#recipeName').val() == "" || $('#recipeDescription').val() == "" || $('#recipeTotalTime').val() == "" || $('#recipeServingSize').val() == "" || $('#ingredient1').val() == "" || $('#instruction1').val() == "") {
        return alert('All fields must be filled out when editting a recipe, including at least Ingredient #1 and one Instruction #1.');
    }

    if($('#recipeName').val().length > 20) {
        return alert('Recipe name must be 20 characters or less!');
    }

    var newIngredients = [];

    var ingredientDiv = document.getElementById('ingredientBox');

    for(var i = 0; i < ingredientDiv.children.length; i ++) {
        newIngredients.push(ingredientDiv.children[i].value);
    }

    var newInstructions = [];

    var instructionDiv = document.getElementById('instructionBox');

    for(var i = 0; i < instructionDiv.children.length; i ++) {
        newInstructions.push(instructionDiv.children[i].value);
    }

    var updateRecipe = {
        name: $('#recipeName').val(),
        description: $('#recipeDescription').val(),
        time: $('#recipeTotalTime').val(),
        servings: $('#recipeServingSize').val(),
        ingredients: newIngredients,
        instructions: newInstructions,
        image: $('#imageUrl').val()
    }

    FIREBASE_UTILITY.updateRecipe(updateRecipe, $('#recipeId').val());
}

//add new recipe to firebase
function addRecipe(){

    if ($('#recipeName').val() == "" || $('#recipeDescription').val() == "" || $('#recipeTotalTime').val() == "" || $('#recipeServingSize').val() == "" || $('#ingredient1').val() == "" || $('#instruction1').val() == "") {
        return alert('You must fill out all fields before creating a recipe, including including at least Ingredient #1 and one Instruction #1.');
    }

    if($('#recipeName').val().length > 20) {
        return alert('Recipe name must be 20 characters or less!');
    }
    
    var newIngredients = [];

    var ingredientDiv = document.getElementById('ingredientBox');

    for(var i = 0; i < ingredientDiv.children.length; i ++) {
        newIngredients.push(ingredientDiv.children[i].value);
    }

    var newInstructions = [];

    var instructionDiv = document.getElementById('instructionBox');

    for(var i = 0; i < instructionDiv.children.length; i ++) {
        newInstructions.push(instructionDiv.children[i].value);
    }


    if ($('#image').val() == "") {
       var imageLink = "https://firebasestorage.googleapis.com/v0/b/the-jungle-cook.appspot.com/o/recipeImages%2Fno-image.svg?alt=media&token=e07e86f3-52aa-49cf-81fd-2ba5a3e97b62";

    } else {
       var imageLink = $('#imageUrl').val();
    }

    var newRecipe = {
        name: $('#recipeName').val(),
        description: $('#recipeDescription').val(),
        time: $('#recipeTotalTime').val(),
        servings: $('#recipeServingSize').val(),
        ingredients: newIngredients,
        instructions: newInstructions,
        image: imageLink
    }

    FIREBASE_UTILITY.writeData(newRecipe);

    var sectionData = SERVER.getSection('create');

    $(document.body).removeClass().addClass('otherBackground');

    $('.content').html(sectionData);

    $('#plusOne').click(addMoreIngredients);

    $('#plusTwo').click(addMoreInstructions);

    $('#addRecipe').click(addRecipe);

    $('#file').change((e) => getImageName(e));
}

//get the image name so that the file input is not ugly
function getImageName(e){
    
    var file = e.target.files[0];

    var fileName = file.name;

   $('#image').val(fileName);

   FIREBASE_UTILITY.uploadFile(file);
}

//get actual firebase url for image
function getImageUrl(url){

    var imgUrl = `<input type="text" id="imageUrl" value='${url}' readonly/>`;
    

    $('#fileBox').html(imgUrl);
}

//delete item from firebase
function deleteRecipe(id) {
    FIREBASE_UTILITY.deleteData(id);
}

//code to execute at the beginning
$(document).ready(function(){

    initListeners();

    var sectionData = SERVER.getSection('home');

    $(document.body).removeClass().addClass('homeBackground');

    $('.content').html(sectionData);

});