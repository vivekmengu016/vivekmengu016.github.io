import React from "react";
import { Link } from "react-router-dom";
import SEO from "./seo";

const Header = () => {

    const toggleTheme = (e) => {
        e.preventDefault();

        document.querySelector('body')?.classList.toggle('dark');
        localStorage.setItem('_vmgio', JSON.stringify({ theme: document.body.classList.contains('dark') ? 'dark' : 'light' }));
    }

    return (
        <div className="header">
            <SEO />
            <div className="innerwrap">
                <div className="header-menu">
                    <Link to="/">Home</Link>
                    {/* <Link to="/contact-me">Contact</Link> */}
                    <a href="https://github.com/vivekmengu016" target="_blank">Github</a>
                    <span className="themetoggle" onClick={toggleTheme}><ion-icon name="contrast-outline"></ion-icon></span>
                </div>
            </div>
        </div>
    )
}

export default Header;