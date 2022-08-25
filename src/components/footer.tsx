import React from "react";

const Footer = () => {
    return (
        <div className="exp-section">
            <div className="footer">
                <p className="footer-creds"><span>&copy;</span> 2022 Built by Vivek Mengu</p>
                <div className="footer-social">
                    <a href="https://www.npmjs.com/~vivekmengu" target="_blank" className="npm"><ion-icon name="logo-npm"></ion-icon></a>
                    <a href="https://www.facebook.com/vivek.mengu016/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://twitter.com/VivekMengu" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="https://codepen.io/vivekmengu" target="_blank"><ion-icon name="logo-codepen"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/vivekmengu016/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <span>/vivekmengu016</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;