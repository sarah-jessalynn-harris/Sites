import React, {Component} from "react";

//component for displaying pantry item
class GListItem extends Component {

    
    render() {

       
            return(
                <div className="listItem checkedItem">
                    <div className="listId">
                        <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                        <button> Add </button>
                    </div>
                 
                    <div className="buttons">
                        <NavLink exact className="button" activeClassName="active" to={"/list/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink exact className="button deleteItem" activeClassName="active" to={"/list/delete/" + this.props.id}> Delete </NavLink>
                    </div>
                </div>
        );

        
    
    }
} 

export default GListItem;