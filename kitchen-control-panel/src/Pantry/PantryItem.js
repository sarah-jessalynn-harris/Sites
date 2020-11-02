import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying pantry item
class PantryItem extends Component {
    render() {
        return(
                <div className="inventoryItem">
                    <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                    <div className="buttons">
                        <button id="${i}" className="editItem"> Edit </button>
                        <NavLink exact className="deleteItem" activeClassName="active" to={"/pantry/delete/" + this.props.id}> Delete </NavLink>
                    </div>
                </div>
        );
    }
}

export default PantryItem;