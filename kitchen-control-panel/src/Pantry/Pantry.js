import React, {Component} from "react";
import PantryItem from "./PantryItem";
import {NavLink} from "react-router-dom";



class Pantry extends Component {
    
    render() {

        return(
            <div>
                <div className="dash pantryDash">
                        Pantry
                </div>
                <div className="inventory">
                
                <div className="recipesHeading">
                    <h3> Log the ingredients you have at home. </h3>
                    <NavLink exact className="recipesButton" activeClassName="active" to={"/pantry/new"}> Add </NavLink>
                </div>
                

                <div className="inventoryItems">
        
                    {this.props.userData.inventory.map ((item, key)  =>
                        <PantryItem 
                            key = {key}
                            amount = {item.amount}
                            label = {item.label}
                            name = {item.name}
                            id = {item.id}
                        />)
                    }
            
                </div>
          </div>
            </div>

        );
    }

}

export default Pantry;