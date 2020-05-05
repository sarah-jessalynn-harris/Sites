import React, {Component} from "react";

class Examples extends Component {

    render() {
        return(
            <div className="example">
                <p className="engEx"> Ex: {this.props.engEx}</p>
                <p className="spanEx"> {this.props.spanEx}</p>
            </div>
        );
    }

}

export default Examples;