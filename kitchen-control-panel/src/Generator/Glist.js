import React, {Component} from "react";
import GListItem from "./GlistItem";



class GList extends Component {
    
    render() {
        return(
            <div>
                    
                    <div className="listItems">
            
                        {this.props.needList.map ((item, key)  =>
                            <GListItem 
                                key = {key}
                                amount = {item.amount}
                                label = {item.label}
                                name = {item.name}
                                id = {item.id}
                            />)
                        }
                
                    </div>
            </div>

        );
    }

}

export default GList;