import React, {Component} from "react";
import {NavLink} from "react-router-dom";

//component to act as the nav bar
class Nav extends Component {

    render() {        

        let navi;

        if(this.props.signedIn) {

            navi =  <nav>

                        <div className="logo">
                            <div className="logoImg"></div>

                            <NavLink exact className="link" activeClassName="active" to={"/"}>  Kitchen Control Panel </NavLink>
                        </div>

                        <div className="links linkBox">

                            <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/dashboard"}> Dashboard </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/recipes"}> Recipes </NavLink>
                            
                            <a className="link"> Plan</a>
                            <a className="link"> Pantry</a>
                            <a className="link"> List</a>

                            <NavLink exact className="link" activeClassName="active" to={{
                                pathname: "/account",
                                state: this.props.userData
                                }}> Account </NavLink>

                            <a className="link"> Help</a>

                            <NavLink exact className="link" activeClassName="active" to={"/logout"}> Logout </NavLink>

                        </div>
                        
                    </nav>;

        } else {

            navi =  <nav>

                <div className="logo">
                    <NavLink exact className="link" activeClassName="active" to={"/"}> Kitchen Control Panel </NavLink>
                </div>

                <div className="links">

                    <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                    <NavLink exact className="link" activeClassName="active" to={"/login"}> Login </NavLink>

                </div>
            
            </nav>;

        }

        return(navi)
    }

}

export default Nav;