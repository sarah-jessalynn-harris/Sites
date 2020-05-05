import React, {Component} from "react";

class Participles extends Component {

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

export default Participles;