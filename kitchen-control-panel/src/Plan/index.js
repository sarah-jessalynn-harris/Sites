import React, {Component} from "react";
import fire from "../Fire";
import { Redirect } from "react-router-dom";
import PlanForm from "./PlanForm";

class PlanHandler extends Component {
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
            this.setState({form: <PlanForm type="new" onSubmit={this.handleNew} uid={this.props.uid} recipes={this.props.recipes}/>});
        } else if (this.props.type === "edit"){
            //find array id for this recipe
            let arrayId = this.props.userData.mealplan.findIndex(x => x.id === this.props.id);

            this.setState({form: <PlanForm type="edit" onSubmit={this.handleNew} uid={this.props.uid} planData={this.props.userData.mealplan[arrayId]} itemId={this.props.id} recipes={this.props.recipes}/>});
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

            var oldPlan = doc.data().mealplan;

            let arrayId = this.props.userData.mealplan.findIndex(x => x.id === this.props.id);

            oldPlan.splice(arrayId, 1);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {mealplan : oldPlan}
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
                    return alert('You must fill out all fields before creating a meal plan. Please include a date, a recipe, and the meal type (breakfast, lunch, dinner, or snack).');
                }
            }

        }

        var planObj;

        //create custom id for recipe
        var randId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        if(this.props.type === "new") {
            
            planObj = {
                id: randId,
                date: event.target.elements[0].value.replaceAll('-', '/'),
                slot: event.target.elements[1].value,
                recipe: event.target.elements[2].value,
            }

            this.addItem(planObj);

        } else if(this.props.type === "edit") {

            console.log(event.target.id);

            planObj = {
                id: event.target.id,
                date: event.target.elements[0].value.replaceAll('-', '/'),
                slot: event.target.elements[1].value,
                recipe: event.target.elements[2].value,
            }

            this.updateItem(planObj);

        }

    }

    //add a new meal plan item to firebase
    addItem(item){
        var id = this.props.id;

        console.log(id);

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldPlan = doc.data().mealplan;
            
            oldPlan.push(item);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {mealplan : oldPlan}
            ).then(() => {
                // console.log("Document successfully written!");
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

            var oldPlan = doc.data().mealplan;

            let arrayId = this.props.userData.mealplan.findIndex(x => x.id === this.props.id);
            
            oldPlan[arrayId] = item;

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {mealplan : oldPlan}
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
            return <Redirect push to="/plan"/>;
        } else {
            return (
            <div className="recipes">
                {this.state.form}
            </div>
            );
        }
      
    }

}

export default PlanHandler;