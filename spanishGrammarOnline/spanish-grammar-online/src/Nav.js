import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    render() {        
        let navi;

            navi =  <nav>

                        <h2> The Store </h2>

                        <p> Welcome Valued Member!</p>

                        <NavLink exact className="link" activeClassName="active" to={"/"}> Profile </NavLink>

                        <NavLink exact className="link" activeClassName="active" to={"/store"}> Store </NavLink>

                        <NavLink exact className="link" activeClassName="active" to={"/cart"}> Cart </NavLink>

                        <NavLink exact className="link" activeClassName="active" to={"/admin"}> Admin </NavLink>

                    </nav>;


        return(navi)
    }

}

export default Nav;