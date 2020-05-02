import React, {Component} from "react";

class ExampleList extends Component {

    render() {
        return(
            <div className="exampleList">
                <p className="exListItem"> {this.props.listItem}</p>
            </div>
        );
    }

}

export default ExampleList;