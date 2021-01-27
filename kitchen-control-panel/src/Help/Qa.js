import React, {Component} from "react";

//component for displaying pantry item
class Qa extends Component {
    render() {
        return(
                <div className="inventoryItem">
                    <h4>{this.props.q}</h4>
                    
                    <p>{this.props.a}</p>
                </div>
        );
    }
}

export default Qa;