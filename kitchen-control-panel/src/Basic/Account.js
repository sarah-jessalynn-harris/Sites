import React, {Component} from "react";

class Account extends Component {

    render() {    
        console.log(this.props.userData.userData);

        return(
            <div className="account">
                <h2> Your Account Information: </h2>
                <p> Name: {this.props.userData.userData.displayName} </p>
                <p> Email: {this.props.userData.userData.email} </p>
                <p> Date Joined: {this.props.userData.userData.joinDate} </p>
                <p> Recipes: {this.props.userData.recipes.length} </p>
            </div>
        );
    }

}

export default Account;