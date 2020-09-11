var FIREBASE_MEAL_UTILITY = (function(){

  function _deleteMeal(mealId, id) {
    firebase.firestore()
    .collection("users")
    .doc(id).get().then(function(doc) {
      if (doc.exists) {

          var oldMeals = doc.data().mealplan;
          
          oldMeals.splice(mealId, 1);

         
          firebase.firestore()
          .collection("users")
          .doc(id)
          .update(
              {mealplan : oldMeals}
              ).then(function() {
              console.log("Document successfully deleted!");
              window.location.href="mealPlan.html";
          }); 

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  function _addMeal(mealObj, id) {
   
  firebase.firestore()
    .collection("users")
    .doc(id).get().then(function(doc) {
      if (doc.exists) {

          var oldMeals = doc.data().mealplan;
          
          oldMeals.push(mealObj);

         
          firebase.firestore()
          .collection("users")
          .doc(id)
          .update(
              {mealplan : oldMeals}
              ).then(function() {
              console.log("Document successfully written!");
              window.location.href="mealPlan.html";
          }); 

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
   }
   
   function _updateMeal(mealObj, userId, mealId) {
   
    firebase.firestore()
      .collection("users")
      .doc(userId).get().then(function(doc) {
        if (doc.exists) {
  
            var oldmeals = doc.data().mealplan;
            
            oldmeals[mealId] = mealObj;

            console.log(oldmeals);
  
           
            firebase.firestore()
            .collection("users")
            .doc(userId)
            .update(
                {mealplan : oldmeals}
                ).then(function() {
                console.log("Document successfully written!");
                window.location.href="mealPlan.html";
            }); 
  
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    
     }


    return {
        addMeal: _addMeal,
        updateMeal: _updateMeal,
        deleteMeal: _deleteMeal
    }
})();