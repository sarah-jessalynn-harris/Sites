import React, {Component} from "react";

//component to render the user dashboard
class Dashboard extends Component {

    render() {      

        return(
            <div className="dashboard">
                 <h3> Dashboard</h3>

                <div className="overview">

                    <h1> Plan Preview</h1>

                    <div className="box"></div>

                </div>

                <div className="dashButtons">
        
                </div>
            </div>
        );
    }

}

export default Dashboard;