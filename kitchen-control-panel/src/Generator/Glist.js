import React, {Component} from "react";
import GListItem from "./GlistItem";



class GList extends Component {

    // to delete an item from the generator list, we have to pass it up to generator from glistitem
    recieveObj(obj){
        // store the passed obj as a prop to pass to generator
        this.props.obj(obj);
    }
    
    render() {
        
        return(
            <div>
                    
                    <div className="listItems">
            
                        {this.props.needList.length !== 0 ? this.props.needList.map ((item, key)  =>
                            <GListItem 
                                key = {key}
                                amount = {item.amount}
                                label = {item.label}
                                name = {item.name}
                                id = {item.id}
                                obj = {(obj) => this.recieveObj
                                (obj)}
                                fireId = {this.props.id}
                            />) : null
                        }
                
                    </div>
            </div>

        );
    }

}

export default GList;