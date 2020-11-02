import React, {Component} from "react";
import PantryForm from "./PantryForm";
import fire from "../Fire";
import { Redirect } from "react-router-dom";

class PantryHandler extends Component {
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

    //choose if the user is adding a new pantry item, updating a pantry item, or deleting a pantry item
    handleRequest(){

        console.log(this.props.id);

        if(this.props.type === "new"){
            this.setState({form: <PantryForm type="new" onSubmit={this.handleNew} uid={this.props.uid} />});
        } else if (this.props.type === "edit"){
            //find array id for this recipe
            let arrayId = this.props.userData.recipes.findIndex(x => x.id == this.props.id);

            this.setState({form: <PantryForm type="edit" onSubmit={this.handleNew} uid={this.props.uid} recipeData={this.props.userData.recipes[arrayId]}/>});
        } else if (this.props.type === "delete") {
            this.handleDelete();
        }
    }   

    //handle delete a pantry item
    handleDelete(){
        var id = this.props.userData.userData.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldPantry = doc.data().inventory;

            let arrayId = this.props.userData.inventory.findIndex(x => x.id == this.props.id);

            oldPantry.splice(arrayId, 1);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {inventory : oldPantry}
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

    //handle a new/edit pantry item from form
    handleNew(event){
        event.preventDefault();

        //check to see if the user has filled out all the fields
        for(var i=0; i <= event.target.elements.length; i++){

            if (i <= 2 ) {
                if(event.target.elements[i].value === "") {
                    console.log("here", event.target.elements[i]);
                    return alert('You must fill out all fields before creating a pantry item. Please include an amount, amount type, and name.');
                }
            }

        }

        var pantryObj = {
            amount: event.target.elements[0].value,
            label: event.target.elements[1].value,
            name: event.target.elements[2].value,
        }

        if(this.props.type == "new") {
            this.addItem(pantryObj);
        } else if(this.props.type == "edit") {
            this.updateItem(pantryObj);
        }

    }

    //add a new pantry item to firebase
    addItem(item){
        var id = this.props.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldPantry = doc.data().inventory;
            
            oldPantry.push(item);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {inventory : oldPantry}
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

    //update pantry item to firebase
    updateItem(item){}

    render() {

        if(this.state.update){
            return <Redirect push to="/pantry"/>;
        } else {
            return (
            <div className="recipes">
                {this.state.form}
            </div>
            );
        }
      
    }

}

export default PantryHandler;