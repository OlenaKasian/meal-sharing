import React from "react";
import "./HeaderFooter.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

function Footer() {
    return (
        <nav>
            <div className="topnav" id="myTopnav">
                <Link to="/"><img src={logo} alt="logo" id="logo" width={25} />Meal Sharing</Link>
                <div className="footer-rigth" id ="footer-rigth">
                    <div className="contacts" id="contacts">
                        <p> Contacts:</p>
                        <ul>
                            <li>Olena Kasiianenko</li>
                            <li>tel: 50 14 34 22</li>
                            <li>e-mail: olena.kasiianenko@gmail.com</li>
                        </ul>
                    </div>
                    <div className="links">
                        <a href="https://slack.com/" target="_blank">
                            <i className="fab fa-slack"></i>
                        </a>
                    </div>


                </div>
            </div>
        </nav >

    );
}

export default Footer;
