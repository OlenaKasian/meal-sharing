import React from "react";
import "./HeaderFooter.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

function Header() {
    return (
        <nav>
            <div className="topnav" id="myTopnav">
                <Link to="/"><img src={logo} alt="logo" id="logo" width={35} />  Meal Sharing</Link>
                <div className="header-right">
                <Link to="/meals">Find meals</Link>
                <Link to="/newmeal">Create new meal</Link>
                </div>
            </div>
        </nav >
    );
}

export default Header;
