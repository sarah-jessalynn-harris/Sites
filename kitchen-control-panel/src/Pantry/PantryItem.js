import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying pantry item
class PantryItem extends Component {
    render() {
        return(
                <div className="inventoryItem">
                    <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                    <div className="buttons">
                    <NavLink exact className="button" activeClassName="active" to={"/pantry/edit/" + this.props.id}> Edit </NavLink>
                    <NavLink exact className="button deleteItem" activeClassName="active" to={"/pantry/delete/" + this.props.id}> Delete </NavLink>
                    </div>
                </div>
        );
    }
}

export default PantryItem;