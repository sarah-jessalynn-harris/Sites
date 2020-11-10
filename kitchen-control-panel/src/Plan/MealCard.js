import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying user's recipe
class MealCard extends Component {


    
    render() {

        var cardBgStyles = {
            backgroundImage: "url(" + this.props.image + ")"
        }

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
            <div className="card">
      
                <div className="cardHeader" style={cardBgStyles}>

                    <div className="cardBanner">
                        <p style={{backgroundColor: tagColor}}> 
                            {this.props.slot} 
                        </p>
                    </div>

                </div>

                <div className="cardContent">

                    <div className="cardDescription">

                        <h2> {this.props.name} </h2>

                        <p> {this.props.description} </p>

                    </div>

                    <div className="cardButtons">

                        <NavLink className="cardButton" to={"/recipe/" + this.props.id}> Cook </NavLink>
                        <NavLink className="cardButton" to={"/plan/edit/" + this.props.id}> Move </NavLink>
                        <NavLink className="cardButton" to={"/recipe/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink className="cardButton" to={"/plan/delete/" + this.props.id}> Delete </NavLink>

                    </div>

                </div>
     
            </div>
        );
    }

}

export default MealCard;