import React, {Component} from "react";
import RecipeCard from "./RecipeCard";
import {NavLink} from "react-router-dom";

class Recipes extends Component {
    
    render() {

        return(
            <div className="recipes">
                <div className="recipesHeading">
                    <h2> Recipes</h2>
                    <NavLink exact className="recipesButton" activeClassName="active" to={"/recipes/new"}> Add </NavLink>
                </div>
                

                <div className="recipesList">
        
                    {this.props.userData.recipes.map ((item, key)  =>
                        <RecipeCard 
                            id = {item.id}
                            key = {key}
                            instructions = {item.instructions}
                            name = {item.name}
                            image = {item.image}
                            description = {item.description}
                            ingredients = {item.ingredients}
                        />)
                    }
            
                </div>
          </div>
        );
    }

}

export default Recipes;