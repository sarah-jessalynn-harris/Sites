import React, {Component} from "react";

class Paragraph extends Component {

    render() {
        return(
            <div class="paragraph">
                <p> {this.props.content}</p>
            </div>
        );
    }

}

export default Paragraph;