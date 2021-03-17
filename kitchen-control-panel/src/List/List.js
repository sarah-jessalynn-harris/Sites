import React, {Component} from "react";
import ListItem from "./ListItem";
import {NavLink} from "react-router-dom";
import Generator from "../Generator/Generator";



class List extends Component {

    state = { generate: false};

    togglePopup = () => {
        this.setState({
         generate: !this.state.generate
        });
       };
    
    render() {

        return(
            <div>
                 {this.state.generate ? <Generator data={this.props.userData} toggle={this.togglePopup}/> : null}

                <div className="list">
                    <div className="recipesHeading">
                        <h2> Shopping List </h2>
                        <div className="listButtons">
                            <NavLink exact className="recipesButton addButton" activeClassName="active" to={"/list/new"}> Add </NavLink>
                            <button className="recipesButton" onClick={this.togglePopup}> Generate </button>
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
          
          </div>
        );
    }

}

export default List;