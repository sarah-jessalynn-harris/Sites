import React, {Component} from "react";

class Home extends Component {

    render() {
        return(
            <div className="login">
                <div className="form">
                    <h3> Login</h3>
                    <label for="rEmail"> Email: </label>
                    <input name="rEmail" type="email" id="rEmail" placeholder="Please enter your email"/>
                    
                    <label for="rPassword"> Password: </label>
                    <input name="rPassword" type="password" id="rPassword" placeholder="Please enter your password"/>
                    
                    <button id="login"> Submit</button>
                    <button id="forgot"> Forgot Password?</button>
                </div>

                <div class="form">
                    <h3> Register</h3>

                    <label for="firstname"> First Name: </label>
                    <input name="firstname" type="text" id="firstname" placeholder="Please enter your first name"/>
                    
                    <label for="lastname"> Last Name: </label>
                    <input name="lastname" type="text" id="lastname" placeholder="Please enter your last name"/>
                    
                    <label for="email"> Email: </label>
                    <input name="email" type="email" id="email" placeholder="Please enter your email"/>
                    
                    <label for="password"> Password: </label>
                    <input name="password" type="password" id="password" placeholder="Please enter your password"/>
                    
                    <button id="create"> Submit</button>
                </div>
            </div>
        );
    }

}

export default Home;