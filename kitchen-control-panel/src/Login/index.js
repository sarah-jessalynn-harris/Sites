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

                this.props.history.push("/");

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
                recipes: [],
                mealplan: [],
                inventory: [],
                shoppinglist: []
              };
      
              return newUser.set(userData).catch(function(error){
                  console.log(error);
                });
                
                
            });

            this.props.history.push("/");
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