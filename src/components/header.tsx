import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const toggleTheme = (e) => {
        e.preventDefault();
        document.querySelector('body')?.classList.toggle('dark');
    }

    return(
        <div className="header">
            <div className="innerwrap">
            <div className="header-menu">
                <Link to="#">Home</Link>
                <Link to="#">Contact</Link>
                <span className="themetoggle" onClick={toggleTheme}><ion-icon name="contrast-outline"></ion-icon></span>
            </div>
            </div>
        </div>
    )
}

export default Header;