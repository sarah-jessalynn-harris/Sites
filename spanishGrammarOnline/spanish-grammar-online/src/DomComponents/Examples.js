import React, {Component} from "react";

class Examples extends Component {

    render() {
        return(
            <div class="example">
                <p class="engEx"> Ex: {this.props.engEx}</p>
                <p class="spanEx"> Ex: {this.props.spanEx}</p>
            </div>
        );
    }

}

export default Examples;