var userData;

function addMealListeners(){
    $("#mealFilter").click((e) => {
        e.preventDefault();
        filterMeals();
    });

    $('.editMeal').click((e) => {
        e.preventDefault();
        editMeal(e.target.id);
    });

    $('.deleteMeal').click((e) => {
        e.preventDefault();
        deleteMeal(e.target.id);
    });
}

function addRecipeChoiceListeners(){
    $("#addMeal").click((e) => {
        e.preventDefault();
        addMeal();
    });

    $(".updateMeal").click((e) => {
        e.preventDefault();
        updateMeal(e.target.id);
    });
}

function showDash(data) {
    userData = data;

    var start = moment();
    var end = moment().add(3, "days");

    var dates = end.diff(start, "days");

    $("#date1").val(moment().format('YYYY-MM-DD'));
    $("#date2").val(moment().add(7, "days").format('YYYY-MM-DD'));

    displayDash(start, dates);
}

function showMeals(data){

    userData = data;

    var start = moment();
    var end = moment().add(7, "days");

    var dates = end.diff(start, "days");

    $("#date1").val(moment().format('YYYY-MM-DD'));
    $("#date2").val(moment().add(7, "days").format('YYYY-MM-DD'));

    displayMeals(start, dates);

    addMealListeners();
}

function showRecipeChoice(data){
    var recipes = data.recipes;

    for(var i = 0; i < recipes.length; i++){
        var choice = `<option value="${recipes[i].name}">${recipes[i].name}</option>`;

        $("#recipeChoice").append(choice);
    }

    addRecipeChoiceListeners();

    return userData = data;
}

function filterMeals() {
    var startDate = $("#date1").val();
    var endDate =$("#date2").val();

    var start = moment(startDate, 'YYYY-MM-DD');
    var end = moment(endDate, 'YYYY-MM-DD');

    var dates = end.diff(start, "days");

    if(dates >= 0) {
        displayMeals(start, dates);
    } else {
        alert("End date must come after start date chronologically.");
    }
}

function displayMeals(start, dates){
    var meals = userData.mealplan;

    $('.calendar').html("");

    for(var i = 0; i <= dates; i++) {
        var currentDate = moment(start, 'YYYY-MM-DD').add(i, 'd');

        var calendar = `<div class="calendarBox" id="${currentDate.format('YYYY-MM-DD')}"><div class="dateRow"><h3>${currentDate.format('dddd')}</h3><h3>${currentDate.format('M/D')}</h3></div><div class="mealBox"></div></div>`;

        $('.calendar').append(calendar);

         for(var j = 0; j < userData.mealplan.length; j++){
             var filteringDate = moment(meals[j].date, 'YYYY-MM-DD');

            if(filteringDate.format('YYYY-MM-DD') == currentDate.format('YYYY-MM-DD')) {

                var mealDiv  = `<div class="mealHolder"><div class="slot"><h4> ${meals[j].slot}</h4></div><div class="mealRecipeBox" id="${j}"><p>${meals[j].recipe}</p></div><div class="buttonBox"> <button class="editMeal" id="${j}"> Edit </button> <button class="deleteMeal" id="${j}"> Delete </button> </div></div>`;

                $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append(mealDiv);

            } 
        }

        if($(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).html() == ""){
            $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append("<h1> You have no meals planned for this day yet . Add one to get started! </h1>");
        }
    }

    var addMeals = `<button onclick="window.location.href='addMeal.html'" class="addMeal"> Add a Meal</button>`;

    $('.calendar').append(addMeals);
    
}


function displayDash(start, dates){
    var meals = userData.mealplan;

    $('.box').html("");

    for(var i = 0; i <= dates; i++) {
        var currentDate = moment(start, 'YYYY-MM-DD').add(i, 'd');

        var calendar = `<div class="calendarBox" id="${currentDate.format('YYYY-MM-DD')}"><div class="dateRow"><h3>${currentDate.format('dddd')}</h3><h3>${currentDate.format('M/D')}</h3></div><div class="mealBox"></div></div>`;

        $('.box').append(calendar);

         for(var j = 0; j < userData.mealplan.length; j++){
             var filteringDate = moment(meals[j].date, 'YYYY-MM-DD');

            if(filteringDate.format('YYYY-MM-DD') == currentDate.format('YYYY-MM-DD')) {

                var mealDiv  = `<div class="mealHolder viewRecipe" id="${j}"><p>${meals[j].slot}: ${meals[j].recipe}</p></div>`;

                $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append(mealDiv);

            } 
        }

        if($(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).html() == ""){
            $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append("<h1> You have no meals planned for this day yet . Add one to get started! </h1>");
        }
    }

    addMealListeners();
    
}

function addMeal(){
    // if ($('#date').val() == "" || $('#slot').val() == "" || $('#recipeChoice').val()) {
    //     return alert('You must fill out all fields before adding a meal plan');
    // }

    var date = $('#date').val();
    var slot = $('#slot').val();
    var recipe = $('#recipeChoice').val();

    var mealObj = {
        date: date,
        slot: slot,
        recipe: recipe
    }

    console.log(mealObj);
    FIREBASE_MEAL_UTILITY.addMeal(mealObj, userData.userData.id);
}

function editMeal(id){
    var form = `<div class="form recipeForms mealForm">
          <h1> Edit Meal </h1>
          <label for="date"> Date: </label>
          <input name="date" type="date" id="date" value="${userData.mealplan[id].date}">
    
          <label for="slot"> Meal Type:</label>
          <select name="slot" id="slot">
            <option value="breakfast" ${"breakfast" == userData.mealplan[id].slot ? "selected" : ""}>Breakfast</option>
            <option value="lunch" ${"lunch" == userData.mealplan[id].slot ? "selected" : ""}>Lunch</option>
            <option value="dinner" ${"dinner" == userData.mealplan[id].slot ? "selected" : ""}>Dinner</option>
            <option value="snack" ${"snack" == userData.mealplan[id].slot ? "selected" : ""}>Snack</option>
          </select>
    
          <div class="mealRecipes">
            <label for="recipeChoice"> Recipe:</label>
            <select name="recipeChoice" id="recipeChoice"></select>
          </div>
    
          <div class="buttons">
            <button class="updateMeal" id="${id}"> Submit</button>
            <button id="cancel" onclick="window.location.href='mealPlan.html'"> Cancel </button>
        </div>
        </div>`;

        $('#mealPlan').html(form);

        var recipes = userData.recipes;

        for(var i = 0; i < recipes.length; i++){
            var choice = `<option value="${recipes[i].name}" ${recipes[i].name == userData.mealplan[id].slot ? "selected" : ""}>${recipes[i].name}</option>`;
    
            $("#recipeChoice").append(choice);
        }
        
        addRecipeChoiceListeners();
}
function updateMeal(id){
        // if ($('#date').val() == "" || $('#slot').val() == "" || $('#recipeChoice').val()) {
    //     return alert('You must fill out all fields before adding a meal plan');
    // }

    var date = $('#date').val();
    var slot = $('#slot').val();
    var recipe = $('#recipeChoice').val();

    var mealObj = {
        date: date,
        slot: slot,
        recipe: recipe
    }

    console.log(mealObj);
    FIREBASE_MEAL_UTILITY.updateMeal(mealObj, userData.userData.id, id);
}

function deleteMeal(id) {
    FIREBASE_MEAL_UTILITY.deleteMeal(id, userData.userData.id);
}

$(document).ready(() => {
    MINI_ACCOUNT_UTILITY.addAccountListeners();
 
    MINI_ACCOUNT_UTILITY.getCurrentUser();
 
 });