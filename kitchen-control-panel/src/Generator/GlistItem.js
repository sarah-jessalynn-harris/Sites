import React, {Component} from "react";
import fire from "../Fire";

//component for displaying pantry item
class GListItem extends Component {

    // remove this item from the generate list
    remove(){
        // create the object from the props
        let obj = {
            amount: this.props.amount,
            label: this.props.label,
            name: this.props.name
        };

        // pass the obj as props to Glist (so it can pass up to Generator for removal)
        this.props.obj(obj);
    }

    // add item to shopping list
    addItem(){

        //create custom id for recipe
        var randId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


        var item = {
            id: randId,
            amount: this.props.amount,
            label: this.props.label,
            name: this.props.name,
            checked: false
        }

        var id = this.props.fireId;

        console.log(id);

        fire.firestore()
        .collection("users")
        .doc(id).get().then((doc) => {
        if (doc.exists) {

            var oldList = doc.data().shoppingList;
            
            oldList.push(item);

            
            fire.firestore()
            .collection("users")
            .doc(id)
            .update(
                {shoppingList : oldList}
            ).then(() => {
                console.log("Document successfully written!");
                this.setState({update: true});
                this.remove();
            }); 

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render() {

       
            return(
                <div className="listItem checkedItem">
                    <div className="listId">
                        <h4>{this.props.amount} {this.props.label} {this.props.name}</h4>
                        
                    </div>
                 
                    <div className="buttons">
                        <button onClick={()=>this.addItem()}> Add </button>
                        <button onClick={()=>this.remove()}> Delete </button>
                    </div>
                </div>
        );

        
    
    }
} 

export default GListItem;