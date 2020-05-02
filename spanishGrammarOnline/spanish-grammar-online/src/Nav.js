import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    render() {        
        let navi;

            navi =  <nav>

                        <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                        <NavLink exact className="link" activeClassName="active" to={"/categories"}> Categories </NavLink>

                        <NavLink exact className="link" activeClassName="active" to={"/articles"}> Articles </NavLink>

                    </nav>;


        return(navi)
    }

}

export default Nav;