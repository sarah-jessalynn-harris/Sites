import React, {Component} from "react";
import ListItem from "./ListItem";
import {NavLink} from "react-router-dom";



class List extends Component {
    
    render() {

        return(
            <div className="list">
                <div className="recipesHeading">
                    <h2> Shopping List </h2>
                    <div className="listButtons">
                        <NavLink exact className="recipesButton" activeClassName="active" to={"/list/new"}> Add </NavLink>
                        <NavLink exact className="recipesButton" activeClassName="active" to={"/list/new"}> Generate </NavLink>
                    </div>
                </div>
                

                <div className="listItems">
        
                    {this.props.userData.shoppingList.map ((item, key)  =>
                        <ListItem 
                            key = {key}
                            amount = {item.amount}
                            label = {item.label}
                            name = {item.name}
                            id = {item.id}
                            checked = {item.checked}
                            userId={this.props.userData.userData.id}
                            userData={this.props.userData}
                        />)
                    }
            
                </div>
          </div>
        );
    }

}

export default List;