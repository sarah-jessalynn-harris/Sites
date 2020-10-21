import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying user's recipe
class RecipeCard extends Component {


    
    render() {

        var cardBgStyles = {
            backgroundImage: "url(" + this.props.image + ")"
        }

        return(
            <div className="card">
      
                <div className="cardHeader" style={cardBgStyles}>

                    <div className="cardBanner">
                        <p> {this.props.name} </p>
                    </div>

                </div>

                <div className="cardContent">

                    <div className="cardDescription">

                        <p> {this.props.description} </p>

                    </div>

                    <div className="cardButtons">

                        <NavLink className="cardButton" to={"/recipe/" + this.props.id}> Cook </NavLink>
                        <NavLink className="cardButton" to={"/recipe/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink className="cardButton" to={"/recipe/delete/" + this.props.id}> Delete </NavLink>

                    </div>

                </div>
     
            </div>
        );
    }

}

export default RecipeCard;