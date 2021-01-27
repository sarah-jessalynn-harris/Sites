import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying user's recipe
class MealCard extends Component {

    constructor(){
        super();
        this.state = {
            hover1: false,
            hover2: false,
            hover3: false
        }
    }

    handleMouseEnter = (id) => {
        switch(id){
            case 1:
                this.setState({hover1: true});
                break;
            case 2:
                this.setState({hover2: true});
                break;
            case 3:
                this.setState({hover3: true});
                break;
            default:
                break;
        } 
    }

    handleMouseLeave = (id) => {
        switch(id){
            case 1:
                this.setState({hover1: false});
                break;
            case 2:
                this.setState({hover2: false});
                break;
            case 3:
                this.setState({hover3: false});
                break;
            default:
                break;
        } 
    }
    
    render() {

        var cardBgStyles = {
            backgroundImage: "url(" + this.props.recipeData.image + ")"
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
            <div className="card mealCard" style={{borderColor: tagColor}}>
      
                <div className="cardHeader" style={cardBgStyles}>

                    <div className="cardBanner">
                        <p style={{backgroundColor: tagColor}}> 
                            {this.props.slot} 
                        </p>
                    </div>

                </div>

                <div className="cardContent">

                    <div className="cardDescription">

                        <h2> {this.props.recipeData.name} </h2>

                    </div>

                    <div className="cardButtons">

                        <NavLink className="cardButton" to={"/recipe/" + this.props.recipe} style={ this.state.hover1 ?  {backgroundColor: "rgba(92, 91, 91, 1)"} :  {backgroundColor: tagColor}} onMouseOver={() => this.handleMouseEnter(1)} onMouseOut={() => this.handleMouseLeave(1)}> Cook </NavLink>
                        <NavLink className="cardButton" to={"/plan/edit/" + this.props.id} style={ this.state.hover2 ?  {backgroundColor: "rgba(92, 91, 91, 1)"} :  {backgroundColor: tagColor}} onMouseOver={() => this.handleMouseEnter(2)} onMouseOut={() => this.handleMouseLeave(2)}> Edit </NavLink>
                        <NavLink className="cardButton" to={"/plan/delete/" + this.props.id} style={ this.state.hover3 ?  {backgroundColor: "rgba(92, 91, 91, 1)"} :  {backgroundColor: tagColor}} onMouseOver={() => this.handleMouseEnter(3)} onMouseOut={() => this.handleMouseLeave(3)}> Delete </NavLink>

                    </div>

                </div>
     
            </div>
        );
    }

}

export default MealCard;