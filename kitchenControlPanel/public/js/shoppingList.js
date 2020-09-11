var userData;

function addListListeners(){
    $("#listFilter").click((e) => {
        e.preventDefault();
        filterList();
    });
}

function showList(data){

    userData = data;

    var start = moment();
    var end = moment().add(3, "days");

    var dates = end.diff(start, "days");

    $("#date1").val(moment().format('YYYY-MM-DD'));
    $("#date2").val(moment().add(7, "days").format('YYYY-MM-DD'));

    createList(start, dates);

}

function filterList() {
    var startDate = $("#date1").val();
    var endDate =$("#date2").val();

    var start = moment(startDate, 'YYYY-MM-DD');
    var end = moment(endDate, 'YYYY-MM-DD');

    var dates = end.diff(start, "days");

    if(dates >= 0) {
        createList(start, dates);
    } else {
        alert("End date must come after start date chronologically.");
    }
}

function createList(start, dates){
    var meals = userData.mealplan;
    var items = [];
    console.log(meals);

    $('.list').html("");

    for(var i = 0; i <= dates; i++) {
       

        var currentDate = moment(start, 'YYYY-MM-DD').add(i, 'd');

         for(var j = 0; j < userData.mealplan.length; j++){
             var filteringDate = moment(meals[j].date, 'YYYY-MM-DD');

            if(filteringDate.format('YYYY-MM-DD') == currentDate.format('YYYY-MM-DD')) {

                for(k = 0; k < userData.recipes.length; k ++) {

                    if (userData.mealplan[j].recipe == userData.recipes[k].name) {
                        
                        for(var l = 0; l < userData.recipes[k].ingredients.length; l++) {
                            items.push(userData.recipes[k].ingredients[l]);
                        }
                    }
                }

            } 
        }

    checkInventory(items);
}

function checkInventory(items) {
    var shoppingList = [];
    var inventory = userData.inventory;

    for(var i = 0; i < items.length; i++) {
        for(var j = 0; j < inventory.length; j++) {

            if(inventory[j].name == items[i].name){                

                var inventorized = inventory[j].amount + " " + inventory[j].label;

                var plan = items[i].amount + " " + items[i].label;

                var sum = math.add(plan, inventorized);
                
                console.log(sum);

            } else {
                shoppingList.push(items[i]);             
            }
        }
    }

    console.log(shoppingList);
}

function displayList(shoppingList) {
            var listDiv  = `<div class="mealHolder"><div class="mealRecipeBox" id="${j}"><p>${meals[j].recipe}</p></div><div class="buttonBox"> <button class="editMeal" id="${j}"> Edit </button> <button class="deleteMeal" id="${j}"> Delete </button> </div></div>`;

        $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append(mealDiv);

        if($(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).html() == ""){
            $(`#${currentDate.format('YYYY-MM-DD')} .mealBox`).append("<h1> You have no meals planned and no items manually added to your list. Add one to get started! </h1>");
        }

        
    // var addItems = `<button onclick="window.location.href='addMeal.html'" class="addMeal"> Add a Meal</button>`;

    // $('.list').append(addItems);
    }
}

$(document).ready(() => {
    MINI_ACCOUNT_UTILITY.addAccountListeners();
 
    MINI_ACCOUNT_UTILITY.getCurrentUser();
 
 });