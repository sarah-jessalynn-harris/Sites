var MINI_ACCOUNT_UTILITY = (function(){

    var _addAccountListeners = function addAccountListeners(){
        
        $("#login").click((e)=>{
            e.preventDefault();

            let email = $("#rEmail").val();
            let pw = $("#rPassword").val();

            if (email == "" || pw == "") {
                alert("You must enter an email and password to proceed.");
            } else {

                FIREBASE_ACCOUNT_UTILITY.signIn(email, pw);
            }

        });

        $("#forgot").click((e)=>{
            e.preventDefault();

            var email = prompt("What email should it be sent to?");

            FIREBASE_ACCOUNT_UTILITY.sendResetPassword(email);
        });
        
        $("#create").click((e)=>{
            e.preventDefault();
            let fName = $("#firstname").val();
            let lName = $("#lastname").val();
            let email = $("#email").val();
            let pw = $("#password").val();

            if (email == "" || pw == "") {
                alert("You must enter an first name, last name, email, and password to proceed.");
            } else {

                FIREBASE_ACCOUNT_UTILITY.createAccount(email, pw, fName, lName);
            }

            
        });

        $("#logOut").click((e)=>{
            e.preventDefault();
            FIREBASE_ACCOUNT_UTILITY.signOut();
        });
    }

    function currentUserData(data){

        showUserData(data);

        switch(top.location.pathname){
            case "/recipes.html":
                showRecipes(data);
                break;

            case "/addRecipe.html":
                showRecipes(data);
                break;

            case "/inventory.html":
                showInventory(data);
                break;

            case "/addInventory.html":
                showInventory(data);
                break;
            
            case "/mealPlan.html":
                showMeals(data);
                break;   
                
            case "/addMeal.html":
                showRecipeChoice(data);
                break; 

            case "/dashboard.html":
                showDash(data);
                break; 

            case "/shoppingList.html":
                showList(data);
                break;
        } 
        
    }

    function showUserData(data){

        //append user data
        var appendable = `<p> Name: ${data.userData.displayName}</p>
        <p> Email: ${data.userData.email}</p> <p> Recipes: ${data.recipes.length}</p>`;

        $('.account').append(appendable);
    }

    var _getCurrentUser = function getCurrentUser() {
        FIREBASE_ACCOUNT_UTILITY.getCurrentUserData(currentUserData);
    }

   return {
       addAccountListeners: _addAccountListeners,
       getCurrentUser: _getCurrentUser
   }

})();
  