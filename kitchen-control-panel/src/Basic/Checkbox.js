import React, {Component} from "react";

//component for displaying pantry item
class Checkbox extends Component {

    render() {

        if(this.props.checked){
            
            return(
                <div className="checkbox checkedBox" onClick={() => this.props.onClick()}>
                     <span>&#10003;</span>
                </div>
            );

        } else {

            return(
                <div className="checkbox" onClick={() => this.props.onClick()}></div>
            );
        }

    }
}

export default Checkbox;