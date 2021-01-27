import React, {Component} from "react";
import fire from "../Fire";

class LogOutHandler extends Component {

    componentDidMount() {
        fire.auth().signOut()
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log (errorMessage, errorCode);
        });

        this.props.history.push("/")
    }

    render() {
        
        return(
            <div></div>
        );
    }
        
}

export default LogOutHandler;