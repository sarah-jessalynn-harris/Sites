import React, {Component} from "react";

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

                        <a className="cardButton"> Cook </a>
                        <a className="cardButton"> Edit </a>
                        <a className="cardButton"> Delete </a>

                    </div>

                </div>
     
            </div>
        );
    }

}

export default RecipeCard;