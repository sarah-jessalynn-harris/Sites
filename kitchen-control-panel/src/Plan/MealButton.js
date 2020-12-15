import React, {Component} from "react";
import { NavLink } from "react-router-dom";


//component for displaying user's recipe
class MealButton extends Component {

    constructor(){
        super();
        this.state = {
            hover: false
        }
    }

    handleMouseEnter = () => {
        this.setState({hover: true});
    }

    handleMouseLeave = () => {
        this.setState({hover: false});
    }


    
    render() {

        var tagColor;

        if(this.props.slot === "breakfast"){
            tagColor = "#FFC68A";
        } else if(this.props.slot === "lunch"){
            tagColor = "#83DEC3";
        } else if(this.props.slot === "dinner"){
            tagColor = " #A4ADE9";
        } else {
            tagColor = "#84dfe2";
        }

        

        return(

                    <NavLink className="mealHolder" style={ this.state.hover ?  {backgroundColor: "rgba(92, 91, 91, 1)"} :  {backgroundColor: tagColor}} to={"/recipe/" + this.props.recipe} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>

                         {this.props.slot} : {this.props.recipeData.name} 

                    </NavLink>
           
        );
    }

}

export default MealButton;