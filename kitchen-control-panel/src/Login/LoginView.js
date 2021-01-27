import React from "react";

const LoginView = ({login, signup, forgot}) => {

        return(
            <div className="login">
                <div className="form">
                    
                    <form className="loginForm" id="logIn" onSubmit = {login}>
                        <h3> Login</h3>
                        <label htmlFor="rEmail"> Email: </label>
                        <input name="rEmail" type="email" id="rEmail" placeholder="Please enter your email"/>
                        
                        <label htmlFor="rPassword"> Password: </label>
                        <input name="rPassword" type="password" id="rPassword" placeholder="Please enter your password"/>
                        
                        <button type ="submit" id="login"> Submit</button>
                        
                    </form>

                    <form className="forgottenForm" id="forgotten" onSubmit= {forgot}>
                        <button type="submit" id="forgot"> Forgot Password?</button>
                    </form>

                </div>

                <form className="form" id="signup" onSubmit = {signup}>
                    <h3> Register</h3>

                    <label htmlFor="firstname"> First Name: </label>
                    <input name="firstname" type="text" id="firstname" placeholder="Please enter your first name"/>
                    
                    <label htmlFor="lastname"> Last Name: </label>
                    <input name="lastname" type="text" id="lastname" placeholder="Please enter your last name"/>
                    
                    <label htmlFor="email"> Email: </label>
                    <input name="email" type="email" id="email" placeholder="Please enter your email"/>
                    
                    <label htmlFor="password"> Password: </label>
                    <input name="password" type="password" id="password" placeholder="Please enter your password"/>
                    
                    <button type="submit" id="create"> Submit</button>
                </form>
            </div>
        );

}

export default LoginView;