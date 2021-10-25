import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

function Header() {
    return (
        <nav>
            <div className="topnav" id="myTopnav">
                {/* <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                    <i className="fa fa-bars"></i>
                </a> */}
                <Link to="/"><img src={logo} alt="logo" id="logo" width={25} />Meal Sharing</Link>
                <Link to="/meals">Find meals</Link>
                <Link to="/about">About us</Link>
            </div>
        </nav >

    );
}

export default Header;
