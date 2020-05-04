import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    render() {        
        let navi;

            navi =  <nav>

                        <div className="logo"></div>

                        <div className="links">

                            <NavLink exact className="link" activeClassName="active" to={"/"}> Home </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/categories"}> Categories </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/activities"}> Activities </NavLink>

                            <NavLink exact className="link" activeClassName="active" to={"/index"}> Index </NavLink>

                        </div>

                        <div className="search">
                            <input type="text"></input>
                            <button> Search</button>
                        </div>

                    </nav>;


        return(navi)
    }

}

export default Nav;