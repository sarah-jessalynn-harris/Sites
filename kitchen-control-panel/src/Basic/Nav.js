import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    render() {        
        let navi;

            navi =  <nav>

                        <div className="logo">
                            <NavLink exact className="link" activeClassName="active" to={"/"}> Kitchen Control Panel </NavLink>
                        </div>

                        <div className="links">

                            <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/login"}> Login </NavLink>

                        </div>
                        
                    </nav>;


        return(navi)
    }

}

export default Nav;