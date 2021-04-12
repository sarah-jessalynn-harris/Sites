import React, {Component} from "react";
import {withRouter} from "react-router";
import fire from "../Fire";
import LoginView from "./LoginView";


//component to handle options on the login page
class LogInHandler extends Component {

    constructor(){
        super();

        this.state = {
            signInType : <LoginView login={this.handleLogIn} signup={this.handleSignUp} forgot={this.forgottenPassword}/>
        }
    }

    componentDidMount(){
        this.setState({form: <div>
            <p> Loading... </p>
        </div>});
        
    }


    // //choose to log in for account or sign up
    // handleSubmit = async event =>{


    //     if(event.target.id === "logIn") {

    //         this.setState({signInType : <LoginView onSubmit={this.handleLogIn}/>});

    //     } else if (event.target.id === "signup") {
            
    //         this.setState({signInType : <LoginView onSubmit={this.handleSignUp}/>});

    //     } else if (event.target.id === "forgotten") {
    //         this.setState({signInType : <LoginView onSubmit={this.forgottenPassword}/>});
    //     }
    // }

    //handle log in for account
    handleLogIn = async event =>{

        event.preventDefault();

        const email = event.target.elements[0].value;
        const password = event.target.elements[1].value;

        if (email === "" || password === "") {
            alert("You must enter an email and password to proceed.");
        } else {

            try {

                await fire.auth().signInWithEmailAndPassword(email, password);

                this.props.history.push("/dashboard");

            } catch (error) {

               alert(error);

            }
        }
    };

    //send forgotten password
    forgottenPassword = async event =>{

        event.preventDefault();

        var email = prompt("What email should it be sent to?");

        let auth = fire.auth();
  
        auth
        .sendPasswordResetEmail(email)
        .then( function(){
            alert('Email Sent. Please Check Your Email For More Instructions.');
        })
        .catch(function(error){
            alert(error  + " Please Try Again.");
        });

    };

    //handle log in for account
    handleSignUp = async event =>{

        event.preventDefault();

        const fn = event.target.elements[0].value;
        const ln = event.target.elements[1].value;
        const email = event.target.elements[2].value;
        const password = event.target.elements[3].value;

        if (fn === "" || ln === "" || email === "" || password === "") {
            alert("You must enter an first name, last name, email, and password to proceed.");
        } else {
            fire.auth().createUserWithEmailAndPassword(email,password)
            .catch(function(error){
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode + '' + errorMessage)
            }).then(function(res){

               var newUser = fire.firestore().collection('users').doc();
      
               var userData = {
                userData : {
                      id : newUser.id,
                      uid: res.user.uid,
                      displayName: fn + ' ' + ln,
                      firstname: fn,
                      lastname: ln,
                      email: email,
                      joinDate: res.user.metadata.creationTime
                  },
                recipes: [
                    {
                        description: "homemade Amish style egg noodles",
                        id: "0zwcpok6nenrx8iow1qi4ii",
                        image: "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/recipeImages%2Fdefault.jpg?alt=media&token=9abb9b44-48f6-4af1-a4b5-074d31976cc2",
                        ingredients: [
                            {label: "floz", name: "eggs", amount: 100},
                            {label: "cup", name: "flour", amount: 3},
                            {amount: 6, name: "broth", label: "cup"},
                            {amount: 5, name: "love", label: "teaspoon"}
                        ],
                        instructions: ["crack eggs into a bowl", "beat eggs", "add flower little by little", "mix until dough like", "roll out dough flat", "roll up flattened dough like a cinnamon roll", "cut the roll slightly", "lay out noodles to dry", "boil broth", "add noodles to broth", "cook noodles until tender", "enjoy! it's hot"],
                        name: "Noodles",
                    },
                    {
                        description: "chicken fajitas with onion, tomato, and bell peppers",
                        id: "2rqf4ook214pzm5nwxgczi",
                        image: "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/undefined%2FrecipeImages%2Ffajita.jpg?alt=media&token=8b1c8714-d89f-4ea9-9441-9b68cc34765a",
                        ingredients: [
                            {amount: 4, label: "teaspoon", name: "butter"},
                            {amount: 5, label: "ounce", name: "onion"},
                            {amount: 5, name: "bell pepper", label: "ounce"},
                            {label: "ounce", amount: 5, name: "tomato"},
                            {label: "cup", name: "seasoning", amount: 0.25},
                            {name: "water", amount: 6, label: "tablespoon"},
                            {label: "lbs", name: "chicken breast", amount: 1},
                            {amount: 10, name: "tortillas", label: "ounce"},
                        ],
                        instructions: ["melt butter in the pan", "fry chicken and veggies together until chicken is cooked and veggies tender", "add seasoning and water until the water boils down", "serve in tortillas right away", "Enjoy!"],
                        name: "Chicken Fajitas"
                    },
                    {
                        description: "delicious staple of American cuisine",
                        id: "iwi0xnlpwclecipowdwihs",
                        image: "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/waWzMikVb2gboEz6qI9T30s91b43%2FrecipeImages%2Fhamburger.jpg?alt=media&token=7d60caea-59cb-488c-9fde-72f01924882d",
                        ingredients: [
                            {label: "lbs", amount: 1, name: "ground beef"},
                            {label: "ounce", amount: 14, name: "hamburger bun"},
                            {name: "lettus", amount: 7, label: "ounce"},
                            {amount: 5, label: "ounce", name: "tomato"},
                            {name: "garlic powder", label: "teaspoon", amount: 2},
                            {label: "teaspoon", name: "onion powder", amount: 2},
                        ],
                        instructions: ["mix seasonings and hamburger meat", "create patties", "fry patties", "place patties and veggies on buns", "Enjoy!"],
                        name: "Hamburger"
                    }

                ],
                mealplan: [],
                inventory: [],
                shoppingList: []
              };
      
              return newUser.set(userData).catch(function(error){
                  console.log(error);
                });
                
                
            });

            this.props.history.push("/dashboard");
        }
    };

    render(){

        if (this.props.logout) {
            fire.auth().signOut()
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log (errorMessage, errorCode);
            });

            this.props.history.push("/");

        } else {
            return this.state.signInType;
        }
    }

}

export default withRouter(LogInHandler);