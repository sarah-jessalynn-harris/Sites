import React, {Component} from "react";

class Auxiliary extends Component {

    render() {
        return(
            <div className="chart">
                {
                    this.props.list.map 
                    ((item, key) =>
                    <p key={key} className="chartCell"> {item}</p>
                    )
                }
               
            </div>
        );
    }

}

export default Auxiliary;