import React, {Component} from "react";

class ExampleList extends Component {

    render() {
        return(
            <div class="exampleList">
                <p class="exListItem"> {this.props.listItem}</p>
            </div>
        );
    }

}

export default ExampleList;