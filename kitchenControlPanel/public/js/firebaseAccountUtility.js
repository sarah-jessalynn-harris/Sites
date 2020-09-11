var FIREBASE_ACCOUNT_UTILITY = (function() {
  
    var _getCurrentUserData = function initFirebaseAuth(callback) {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        if(user){
          $("#loggedOut").css('display', 'none');
          $("#loggedIn").css('display', 'flex');
          _getData(user.uid, callback);
        } else {
          $("#loggedOut").css('display', 'flex');
          $("#loggedIn").css('display', 'none');
        }
  
       
      });
    }

    var _getData = function(user, callback) { 
      
      db.collection("users").where("userData.uid", "==", user)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                _currentUserData = doc.data();
                callback(_currentUserData);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      };
  
    var _sendResetPassword = function(emailAddress) {
      let auth = firebase.auth();
  
      auth
      .sendPasswordResetEmail(emailAddress)
      .then( function(){
        alert('Email Sent. Please Check Your Email For More Instructions.');
      })
      .catch(function(error){
        alert(error  + " Please Try Again.");
      });
    }
  
    var _createAccount = function(email, pw, fname, lname) {
 
      firebase.auth().createUserWithEmailAndPassword(email,pw)
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + '' + errorMessage)
      }) .then(function(res){
         console.log(res); 
         
         var newUser = firebase.firestore().collection('users').doc();

         var userData = {
          userData : {
                id : newUser.id,
                uid: res.user.uid,
                displayName: fname + ' ' + lname,
                firstname: fname,
                lastname: lname,
                email: email
            },
          recipes: [],
          mealplan: [],
          inventory: [],
          shoppinglist: []
        };

        return newUser.set(userData).catch(function(error){
            console.log(error);
          }).then(function(){
             window.location.href ="dashboard.html";
          });
          
         });
    }
  
    var _signIn = function(email, pw) {
      firebase.auth().signInWithEmailAndPassword(email, pw)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Incorrect Login Information. Please Try Again.");

        // ...
      }). then(function(res){
        console.log(res);
        window.location.href ="dashboard.html";
      });
    }
  
  
    var _signOut = function() {
      firebase.auth().signOut()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }). then(function(res){
        console.log(res);
        window.location.href ="login.html";
      });;
    }
  
    var _getAllData = function() { 
      var query = firebase 
      .firestore() 
      .collection('users') 
      .orderBy('timestamp', 'desc') 
      .limit(12); 
      
      // Start listening to the query. 
      query.onSnapshot(function(snapshot) { snapshot.docChanges().forEach(function(change) { 
        if (change.type === 'removed') { 
        //it has been deleted 
        console.log('removed'); 
      } else { 
        let data = change.doc.data(); 
        console.log('data ', data); 
      } 
    }); 
    }); 
    };

    return {
      //   return functions here
      signOut: _signOut,
      createAccount: _createAccount,
      signIn: _signIn,
      sendResetPassword: _sendResetPassword,
      getAllData: _getAllData,
      getCurrentUserData: _getCurrentUserData
    };
  })();