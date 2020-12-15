import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import recipe from "../img/recipe.jpg";
import meal from "../img/mealplan.jpeg";
import shopping from "../img/shopping.jpeg";
import faq from "../img/faq.jpeg";
import user from "../img/user.jpeg";
import ingredients from "../img/ingredients.jpeg"

class Card extends Component {

    constructor(){
        super();
        this.state = {
            hover: false,
        }
    }

    handleMouseEnter = () => {
        this.setState({hover: true});
    }

    handleMouseLeave = () => {
        this.setState({hover: false});
    }

    
    render() {

        var cardBgStyles;

        var tagColor;

        if(this.props.title === "Recipes"){
            tagColor = "#84dfe2";
            cardBgStyles = recipe;
        } else if(this.props.title === "Pantry"){
            tagColor = "#83DEC3";
            cardBgStyles = ingredients;
        } else if(this.props.title === "Meal Plan"){
            tagColor = "#A4ADE9";
            cardBgStyles = meal;
        } else if(this.props.title === "Shopping List"){
            tagColor = "#FFC68A";
            cardBgStyles = shopping;
        } else if(this.props.title === "Your Profile"){
            tagColor = "#E1DFFD";
            cardBgStyles = user;
        } else if(this.props.title === "Support"){
            tagColor = "#9c9999";
            cardBgStyles = faq;
        }

        

        return(
            <div className="card mealCard" style={{borderColor: tagColor} }>
      
                <div className="cardHeader" style={{backgroundImage: `url('${cardBgStyles}')`}}>

                    <div className="cardBanner">
                        <p style={{backgroundColor: tagColor}}> 
                            {this.props.title} 
                        </p>
                    </div>

                </div>

                <div className="cardContent">

                    <div className="cardDescription">

                        <p> {this.props.desc} </p>

                    </div>

                    <div className="cardButtons">

                    <NavLink className="cardButton linkButton" style={ this.state.hover ?  {backgroundColor: "rgba(92, 91, 91, 1)"} :  {backgroundColor: tagColor}} to={this.props.link} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>

                       {this.props.action}

                    </NavLink>

                    </div>

                </div>
     
            </div>
        );
    }

}

export default Card;