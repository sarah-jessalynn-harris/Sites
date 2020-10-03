import React, {Component} from "react";
import {withRouter} from "react-router";
import fire from "../Fire";
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
            this.setState({form: <RecipeForm type="new" onSubmit={this.handleNew} />})
        }
    }

    handleNew(){
        console.log("new");
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