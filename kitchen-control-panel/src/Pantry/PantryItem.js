import React, {Component} from "react";
import { NavLink } from "react-router-dom";

//component for displaying pantry item
class PantryItem extends Component {
    render() {
        return(
<div class="inventoryItem"><h4>${items[i].amount + " " + items[i].label + " " + items[i].name}</h4><div class="buttons"><button id="${i}" class="editItem"> Edit </button><button id="${i}" class="deleteItem"> Delete </button></div></div>


        );
    }
}

export default PantryItem;