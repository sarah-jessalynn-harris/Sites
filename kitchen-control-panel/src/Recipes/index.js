import React, {Component} from "react";
import RecipeForm from "./RecipeForm";

class RecipeHandler extends Component {

    state = {form: ""}
    
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
        }
    }

    handleNew(event){
        event.preventDefault();

        console.log(event.target.elements);
       
        // if (event.target.elements[0].value == "" || event.target.elements[1].value == "" || event.target.elements[3].value == "" || $('#instruction1 input').val() == "") {
        //     return alert('You must fill out all fields before creating a recipe, including at least Ingredient #1 and Instruction #1.');
        // }

        var recipeObj = {
            name: event.target.elements[0].value,
            description: event.target.elements[1].value
        }

        console.log(recipeObj);
    }

    render() {

        return(
            <div className="recipes">
                {this.state.form}
            </div>
        );
    }

}

export default RecipeHandler;