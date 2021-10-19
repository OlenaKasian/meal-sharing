import React from "react";

function Header() {
    return (
        <nav>
            <div>
                <img src="src/frontend/assets/images/logo.png" alt="logo" id="logo" /><Link to="/">Meal Sharing</Link></div>
            <div className="flex-column">
                <Link to="/meals">Find meals</Link>
                <Link to="/about">About us</Link>
            </div>
        </nav >

    );
}

export default Header;