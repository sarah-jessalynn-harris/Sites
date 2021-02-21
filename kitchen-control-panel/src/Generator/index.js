import React, {Component} from "react";
import ListForm from "./ListForm";
import fire from "../Fire";
import { Redirect } from "react-router-dom";

class GHandler extends Component {
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

        if(this.props.type === "new"){
            this.setState({form: <ListForm type="new" onSubmit={this.handleNew} uid={this.props.uid} />});
        } else if (this.props.type === "edit"){
            //find array id for this recipe
            let arrayId = this.props.userData.shoppingList.findIndex(x => x.id === this.props.id);

            this.setState({form: <ListForm type="edit" onSubmit={this.handleNew} uid={this.props.uid} listData={this.props.userData.shoppingList[arrayId]} itemId={this.props.id} />});
        } else if (this.props.type === "delete") {
            this.handleDelete();
        }
    }   

    //handle delete a list item
    handleDelete(){
        var id = this.props.userData.userData.id;

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldList = doc.data().shoppingList;

            let arrayId = this.props.userData.shoppingList.findIndex(x => x.id === this.props.id);

            oldList.splice(arrayId, 1);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {shoppingList : oldList}
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

    //handle a new/edit list item from form
    handleNew(event){
        event.preventDefault();

        //check to see if the user has filled out all the fields
        for(var i=0; i <= event.target.elements.length; i++){

            if (i <= 2 ) {
                if(event.target.elements[i].value === "") {
                    console.log("here", event.target.elements[i]);
                    return alert('You must fill out all fields before creating a list item. Please include an amount, amount type, and name.');
                }
            }

        }

        var listObj;

        //create custom id for recipe
        var randId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        if(this.props.type === "new") {
            
            listObj = {
                id: randId,
                amount: event.target.elements[0].value,
                label: event.target.elements[1].value,
                name: event.target.elements[2].value,
                checked: false
            }

            this.addItem(listObj);

        } else if(this.props.type === "edit") {
            
            var checkedBool;

            if(event.target.elements[3].value === "Yes") {
                checkedBool = true;
            } else {
                checkedBool = false;
            }

            listObj = {
                id: event.target.id,
                amount: event.target.elements[0].value,
                label: event.target.elements[1].value,
                name: event.target.elements[2].value,
                checked: checkedBool
            }

            this.updateItem(listObj);

        }

    }

    //add a new pantry item to firebase
    addItem(item){
        var id = this.props.id;

        console.log(id);

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldList = doc.data().shoppingList;
            
            oldList.push(item);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {shoppingList : oldList}
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
    updateItem(item){
        var id = this.props.userData.userData.id;

        console.log(id);

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldList = doc.data().shoppingList;

            let arrayId = this.props.userData.shoppingList.findIndex(x => x.id === this.props.id);
            
            oldList[arrayId] = item;

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {shoppingList : oldList}
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
            return <Redirect push to="/list"/>;
        } else {
            return (
            <div className="recipes">
                {this.state.form}
            </div>
            );
        }
      
    }

}

export default GHandler;