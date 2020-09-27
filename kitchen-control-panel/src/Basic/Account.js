import React, {Component} from "react";

//component to render the user account page information
class Account extends Component {

    render() {    

        return(
            <div className="account">

                <div className="accountHeader">
                    <div className="background">
                        <div className="avatar"> </div>  
                    </div>
                </div>  

                <h2> Hello, {this.props.userData.userData.firstname}! </h2>
                <p> Name: {this.props.userData.userData.displayName} </p>
                <p> Email: {this.props.userData.userData.email} </p>
                <p> Date Joined: {this.props.userData.userData.joinDate} </p>
                <p> Recipes: {this.props.userData.recipes.length} </p>
            </div>
        );
    }

}

export default Account;