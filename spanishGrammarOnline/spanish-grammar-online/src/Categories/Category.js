import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Category extends Component {

    render() {
        return(
            <div>
                <NavLink className="categoryLinking" to={"/"+ this.props.link} >
                    <div className="category">
                        <h2> {this.props.title} </h2>
                        <p> {this.props.desc}</p>
                    </div>
                </NavLink>
            </div>
        );
    }

}

export default Category;