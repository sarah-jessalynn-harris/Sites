import React, {Component} from "react";
import RecipeForm from "./RecipeForm";
import fire from "../Fire";
import { Redirect } from "react-router-dom";

class RecipeHandler extends Component {

    constructor(){
        super();
        this.handleNew = this.handleNew.bind(this);
    }

    state = {form: "", update: false}
    
    //call the loading screen while data is still loading
    componentDidMount(){
        this.setState({form:  <div className="loadingScreen">
          
        <p> Loading...</p>

      </div>});

        this.handleRequest();
    }

    //choose if the user is adding a new recipe, updating a recipe, or deleting a recipe
    handleRequest(){

        if(this.props.type === "new"){
            this.setState({form: <RecipeForm type="new" onSubmit={this.handleNew} uid={this.props.uid} />});
        } else if (this.props.type === "edit"){
            //find array id for this recipe
            let arrayId = this.props.userData.recipes.findIndex(x => x.id === this.props.id);

            this.setState({form: <RecipeForm type="edit" onSubmit={this.handleNew} uid={this.props.uid} recipeData={this.props.userData.recipes[arrayId]} itemId = {this.props.id}/>});
        } else if (this.props.type === "delete") {
            this.handleDelete();
        }
    }

    //handle delete a recipe
    handleDelete(){
        var id = this.props.userData.userData.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldRecipes = doc.data().recipes;

            let arrayId = this.props.userData.recipes.findIndex(x => x.id === this.props.id);

            oldRecipes.splice(arrayId, 1);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {recipes : oldRecipes}
            ).then(() => {
                console.log("Document successfully written!");
                this.setState({update: true});
            }); 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    //handle a new/edit recipe from form
    handleNew(event){
        event.preventDefault();

        //check to see if the user has filled out all the fields
        for(var i=0; i <= event.target.elements.length; i++){

            if (i <= 4 || i === 6) {
                if(event.target.elements[i].value === "") {
                    console.log("here", event.target.elements[i]);
                    return alert('You must fill out all fields before creating a recipe, including at least Ingredient #1 and Instruction #1.');
                }
            }

        }

        //get ingredients into an array of objects with amount, label, and name properties    
        var rawAmounts = [];
        var rawLabels = [];
        var rawNames = [];

        var ingredientBox = document.body.querySelector('.ingredientBox');

        var isOdd = function(x) { return x & 1; };

        for(var g=0; g < ingredientBox.children.length; g++){
            for(var x=0; x < ingredientBox.children[x].children.length; x++){
                if(x === 0) {
                    rawAmounts.push(Number(ingredientBox.children[g].children[x].value));
                } else {
                    if(isOdd(x)) {
                        rawLabels.push(ingredientBox.children[g].children[x].value);
                    } else {
                        rawNames.push(ingredientBox.children[g].children[x].value);
                    }
                } 
            }
        }

        //put objects into the array
        var ingredients = [];

        for(var y = 0; y < rawAmounts.length; y++){
            var ingredientObj = {
                amount: rawAmounts[y],
                label: rawLabels[y],
                name: rawNames[y]
            }
            ingredients.push(ingredientObj);
        }

        //get the instructions in an array
        var instructions = [];

        var instructionBox = document.body.querySelector('.instructions');

        for(var z = 0; z < instructionBox.children.length; z++){
            instructions.push(instructionBox.children[z].value);
        }

        //get the recipe image link or set the default
        var imgHolder = document.getElementById("fileBox").childElementCount;

        var recipeImg;

        if(imgHolder === 0) {
            recipeImg = "https://firebasestorage.googleapis.com/v0/b/kitchen-control-panel.appspot.com/o/recipeImages%2Fdefault.jpg?alt=media&token=9abb9b44-48f6-4af1-a4b5-074d31976cc2";
        } else {
            recipeImg = document.getElementById("urlPreview").href;
        }

        var recipeObj;

        //create custom id for recipe
        var randId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        if(this.props.type === "new") {
            
            //create the recipe object that will be sent to the database
            recipeObj = {
                id: randId,
                name: event.target.elements[0].value,
                description: event.target.elements[1].value,
                instructions: instructions,
                ingredients: ingredients,
                image: recipeImg           
            }

            this.addRecipe(recipeObj);

        } else if(this.props.type === "edit") {
            console.log(event.target.id);
            //create the recipe object that will be sent to the database
            recipeObj = {
                id: event.target.id,
                name: event.target.elements[0].value,
                description: event.target.elements[1].value,
                instructions: instructions,
                ingredients: ingredients,
                image: recipeImg           
            }

            this.updateRecipe(recipeObj);

        }
        

    }

    //add a new recipe to firebase
    addRecipe(recipe){
        var id = this.props.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldRecipes = doc.data().recipes;
            
            oldRecipes.push(recipe);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {recipes : oldRecipes}
            ).then(() => {
                console.log("Document successfully written!");
                this.setState({update: true});
            }); 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    //update recipe to firebase
    updateRecipe(recipe){
        var id = this.props.userData.userData.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldRecipes = doc.data().recipes;

            let arrayId = this.props.userData.recipes.findIndex(x => x.id === this.props.id);

            oldRecipes[arrayId] = recipe;

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {recipes : oldRecipes}
            ).then(() => {
                console.log("Document successfully written!");
                this.setState({update: true});
            }); 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render() {

        if(this.state.update){
            return <Redirect push to="/recipes"/>;
        } else {
            return (
            <div className="recipes">
                {this.state.form}
            </div>
            );
        }
      
    }

}

export default RecipeHandler;