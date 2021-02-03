import React, {Component} from "react";
import Checkbox from "../Basic/Checkbox";
import { NavLink } from "react-router-dom";
import fire from "../Fire";

//component for displaying pantry item
class ListItem extends Component {

    constructor(){
        super();

        this.check = this.check.bind(this);
    }

    state = {checked : false}

    componentDidMount(){
        this.setState({checked: this.props.checked});
    }

    check(){
        this.setState({checked: !this.state.checked}, () =>{
           var item = {
                id: this.props.id,
                amount: this.props.amount,
                label: this.props.label,
                name: this.props.name,
                checked: this.state.checked
            }

            var id = this.props.userId

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldList = doc.data().shoppingList;

            let arrayId = this.props.userData.shoppingList.findIndex(x => x.id === this.props.id);
            
            oldList[arrayId] = item;

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {shoppingList : oldList}
            ).then(() => {
                console.log("Document successfully written!");
            }); 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        });

        
    }

    render() {

        if(this.state.checked){
            return(
                <div className="listItem checkedItem">
                    <div className="listId">
                       <Checkbox checked={this.state.checked} onClick={this.check}/>
                        <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                    </div>
                 
                    <div className="buttons">
                        <NavLink exact className="button" activeClassName="active" to={"/list/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink exact className="button deleteItem" activeClassName="active" to={"/list/delete/" + this.props.id}> Delete </NavLink>
                    </div>
                </div>
        );

        } else {
            return(
                <div className="listItem">
                    <div className="listId">
                       <Checkbox checked={this.state.checked} onClick={this.check}/>
                        <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                    </div>
                 
                    <div className="buttons">
                        <NavLink exact className="button" activeClassName="active" to={"/list/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink exact className="button deleteItem" activeClassName="active" to={"/list/delete/" + this.props.id}> Delete </NavLink>
                    </div>
                </div>
        );

        }
    }
}

export default ListItem;