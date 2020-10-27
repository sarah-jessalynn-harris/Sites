import React, {Component} from "react";
import PantryItem from "./PantryItem";
import {NavLink} from "react-router-dom";



class Pantry extends Component {
    
    render() {

        return(
            <div className="inventory">
                <div className="recipesHeading">
                    <h2> Recipes</h2>
                    <NavLink exact className="recipesButton" activeClassName="active" to={"/inventory/new"}> Add </NavLink>
                </div>
                

                <div className="inventoryItems">
        
                    {this.props.userData.inventory.map ((item, key)  =>
                        <PantryItem 
                            key = {key}
                            amount = {item.amount}
                            label = {item.label}
                            name = {item.name}
                        />)
                    }
            
                </div>
          </div>
        );
    }

}

export default Pantry;