import React, {Component} from "react";

class ExampleList extends Component {

    render() {
        return(
            <div className="exampleList">
                {
                    this.props.list.map 
                    ((item, key) =>
                    <p key={key} className="exListItem"> {item}</p>
                    )
                }
               
            </div>
        );
    }

}

export default ExampleList;