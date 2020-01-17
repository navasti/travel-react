import React from 'react';
const MobileMenu = () => {
    return (
        <nav id="mobile-menu">
            <div className="mobile-tips">
                <a href="/">Plan your trip</a>
                <a href="/">Find cheap flights</a>
            </div>
            <div className="middle-line"></div>
            <div className="contact">
                <div className="mail">
                    <p>Contact</p>
                    <i className="far fa-envelope"></i>
                </div>
                <div className="social">
                    <p>Social media</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
        </nav>
    )
}
export default MobileMenu
