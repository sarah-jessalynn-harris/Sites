import React, {Component} from "react";

class Category extends Component {

    render() {
        return(
            <div className="category">
                <h2> {this.props.title} </h2>
                <p> {this.props.desc}</p>
            </div>
        );
    }

}

export default Category;