import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    render() {        

        let navi;

        if(this.props.signedIn) {

            navi =  <nav>

                        <div className="logo">
                            <NavLink exact className="link" activeClassName="active" to={"/"}> Kitchen Control Panel </NavLink>
                        </div>

                        <div className="links linkBox">

                            <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/dashboard"}> Dashboard </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={{
                                pathname: "/account",
                                state: this.props.userData
                                }}> Account </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/logout"}> Sign Out </NavLink>

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