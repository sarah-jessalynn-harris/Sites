import React, {Component} from "react";
import GListItem from "./GlistItem";
import {NavLink} from "react-router-dom";
import Generator from "../Generator/Generator";



class GList extends Component {
    
    render() {

        return(
            <div>
                    
                    <div className="listItems">
            
                        {this.props.userData.shoppingList.map ((item, key)  =>
                            <GListItem 
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

export default GList;