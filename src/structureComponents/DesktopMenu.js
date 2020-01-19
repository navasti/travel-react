import React from 'react';
const DesktopMenu = () => {
    return (
        <nav id="desktop-menu">
            <div className="contact">
                <div className="mail">
                    <p>Contact</p>
                    <i className="far fa-envelope"></i>
                </div>
                <div className="social">
                    <p>Social media</p>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </nav>
    )
}
export default DesktopMenu
