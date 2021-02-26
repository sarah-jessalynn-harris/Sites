import React, {Component} from "react";

//component for displaying pantry item
class GListItem extends Component {

    
    render() {

       
            return(
                <div className="listItem checkedItem">
                    <div className="listId">
                        <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                        
                    </div>
                 
                    <div className="buttons">
                        <button> Add </button>
                        <button> Delete </button>
                    </div>
                </div>
        );

        
    
    }
} 

export default GListItem;