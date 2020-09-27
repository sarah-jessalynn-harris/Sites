import React, {Component} from "react";
import RecipeCard from "./RecipeCard";


class Recipes extends Component {

    
    render() {

        return(
            <div className="recipes">
                <div className="recipesHeading">
                    <h2> Recipes</h2>
                    <a className="recipesButton"> Add </a>
                </div>
                

                <div className="recipesList">
        
                    {this.props.userData.recipes.map (item  =>
                        <RecipeCard 
                            id = {item.id}
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