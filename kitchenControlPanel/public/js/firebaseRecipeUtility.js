var FIREBASE_RECIPE_UTILITY = (function(){
  //upload images to firebase
  function _uploadFile(file, uid){
    var fileName = file.name;

     // this is a reference to Firebase storage for uploading images
     var storageRef = firebase.storage().ref( uid+ '/recipeImages/' + fileName);
  
     var uploadTask = storageRef.put(file);
  
     uploadTask.on('state_changed', function(snapshot){
  
     }, function(error) {
  
      console.log(error);
  
     }, function() {
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
        return getImageUrl(downloadURL);
       });
     });
  
  }

  function _deleteRecipe(recipeId, id) {
    firebase.firestore()
    .collection("users")
    .doc(id).get().then(function(doc) {
      if (doc.exists) {

          var oldRecipes = doc.data().recipes;
          
          oldRecipes.splice(recipeId, 1);

         
          firebase.firestore()
          .collection("users")
          .doc(id)
          .update(
              {recipes : oldRecipes}
              ).then(function() {
              console.log("Document successfully deleted!");
              window.location.href="recipes.html";
          }); 

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  function _addRecipe(recipeObj, id) {
   
  firebase.firestore()
    .collection("users")
    .doc(id).get().then(function(doc) {
      if (doc.exists) {

          var oldRecipes = doc.data().recipes;
          
          oldRecipes.push(recipeObj);

         
          firebase.firestore()
          .collection("users")
          .doc(id)
          .update(
              {recipes : oldRecipes}
              ).then(function() {
              console.log("Document successfully written!");
              window.location.href="recipes.html";
          }); 

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
   }
   
   function _updateRecipe(recipeObj, userId, recipeId) {
   
    firebase.firestore()
      .collection("users")
      .doc(userId).get().then(function(doc) {
        if (doc.exists) {
  
            var oldRecipes = doc.data().recipes;
            
            oldRecipes[recipeId] = recipeObj;

            console.log(oldRecipes);
  
           
            firebase.firestore()
            .collection("users")
            .doc(userId)
            .update(
                {recipes : oldRecipes}
                ).then(function() {
                console.log("Document successfully written!");
                window.location.href="recipes.html";
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
        uploadFile: _uploadFile,
        addRecipe: _addRecipe,
        updateRecipe: _updateRecipe,
        deleteRecipe: _deleteRecipe
    }
})();