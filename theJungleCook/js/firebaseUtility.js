var FIREBASE_UTILITY = (function(){

  var userImageURL;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwn8upAYx3myY9HHBrlpx95fvckAFEABM",
    authDomain: "the-jungle-cook.firebaseapp.com",
    databaseURL: "https://the-jungle-cook.firebaseio.com",
    projectId: "the-jungle-cook",
    storageBucket: "the-jungle-cook.appspot.com",
    messagingSenderId: "508430084443"
  };

  firebase.initializeApp(config);


  //upload images to firebase
function _uploadFile(file){
  var fileName = file.name;

   // this is a reference to Firebase storage for uploading images
   var storageRef = firebase.storage().ref('recipeImages/' + fileName);

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


//----------RECIPES-------------------


  //create recipes
  var _writeData = function(recipe) { 
    var newrecipeKey = firebase 
      .database() 
      .ref() 
      .child('recipes') 
      .push().key; 
    firebase 
      .database() 
      .ref('recipes/' + newrecipeKey) 
      .set(recipe); 
  };

  //get all recipes
  var _getRecipes = function(callback) {
    firebase
      .database()
      .ref('recipes/')
      .once('value')
      .then(function(snapshot) {
        var recipeArray = snapshot.val();

        return callback(recipeArray);
      });
  }

    //get a specific recipe for viewing
    var _getRecipe = function(id) {

      firebase
        .database()
        .ref('recipes/' + id)
        .once('value')
        .then(function(snapshot) {
          var recipe = snapshot.val();
  
          return processRecipe(recipe, id);
        });
    }

     //get a specific recipe for editting
     var _getRecipeEdit = function(id) {

      firebase
        .database()
        .ref('recipes/' + id)
        .once('value')
        .then(function(snapshot) {
          var recipe = snapshot.val();
  
          return edit(recipe, id);
        });
    }

  //delete a recipe
  var _deleteData = function(recipeKey){
    firebase
    .database()
    .ref('recipes/' + recipeKey)
    .remove();

    var sectionData = SERVER.getSection('your');

    $(document.body).removeClass().addClass('recipeBackground');

    $('.content').html(sectionData);

    FIREBASE_UTILITY.getRecipes(processRecipes);

  }

  //update recipe
  var _updateRecipe = function(updateRecipe, id){

    firebase
      .database()
      .ref('recipes/' + id)
      .update(updateRecipe);

      var sectionData = SERVER.getSection('your');

      $(document.body).removeClass().addClass('recipeBackground');
  
      $('.content').html(sectionData);
  
      FIREBASE_UTILITY.getRecipes(processRecipes);
  }


// --------- USERS -------------------


  // this is used to write the users information to the database.
  function writeUserData(userId, name, email, imageUrl) {
    var newKey = firebase
      .database()
      .ref()
      .child('users')
      .push().key;

    firebase
      .database()
      .ref('users/' + newKey)
      .set({
        username: 'Susan',
        email: 'hotness@hotness.com',
        profile_picture: userImageURL
      });
  }
  
  // this will get all the data in the database once
  function getOnce() {
    firebase
      .database()
      .ref('users/')
      .once('value')
      .then(function(snapshot) {
        // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        console.log(snapshot.val());
        var userArray = snapshot.val();

        $.each(userArray, function(idx, value) {
          $('body').append(
            '<p>Username: ' +
              value.username +
              ' Email: ' +
              value.email +
              '</p><div><img src="' +
              value.profile_picture +
              '"/></div>'
          );

          console.log(value.profile_picture);
          console.log(value.username);
          console.log(value.email);
        });
      });
  }

  // this will delete a user. You will need the key reference
  function deleteUser() {
    firebase
      .database()
      .ref('users/1234')
      .remove();
  }

  // function used to update a user
  function updateUsers() {
    var user = {
      username: 'Tom',
      email: 'tom@tom.com',
      profile_picture: 'images/tom.jpg'
    };

    // var newKey = firebase.database().ref().child('users').push().key;

    firebase
      .database()
      .ref('users/12345')
      .update(user);
  }


  // this function will create the user. You will need the full name and email as well as their password and callback.
  function createUser(name, email, pw, callback) {
    console.log(name);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        $('.error').html(errorMessage);
      })
      .then(function(res) {
        console.log(res);
        firebase
          .database()
          .ref('users/' + res.user.uid)
          .set({
            username: name,
            email: email,
            profile_picture: ''
          });
      });
  }

  // This will login a user and store their info locally. You will need email and password and callback.
  function loginUser(email, pw, callback) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pw)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        $('.error').html('This email is not signed up');
      })
      .then(function(res) {
        console.log(res);
      });
  }

  return {
    writeData: _writeData,
    deleteData: _deleteData,
    updateRecipe: _updateRecipe,
    getRecipes: _getRecipes,
    getRecipe: _getRecipe,
    uploadFile: _uploadFile,
    getRecipeEdit: _getRecipeEdit
  };

})();
