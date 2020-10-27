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
    handleDelete(){}

    //handle a new/edit pantry item from form
    handleNew(event){
        event.preventDefault();
    }

    //add a new pantry item to firebase
    addItem(item){}

    //update pantry item to firebase
    updateItem(item){}

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

export default PantryHandler;