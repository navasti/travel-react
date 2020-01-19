import React from 'react'

const Header = () => {
  const handleHamburgerClick = () => {
    if(window.innerWidth < 1024){
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('active');
    }else{
      const desktopMenu = document.getElementById('desktop-menu');
      desktopMenu.classList.toggle('active');
    }
  }
    return (
        <header id="header">
        <div onClick={handleHamburgerClick} className="hamburger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id="desktop-tips">
            <a href="/travel-react">Plan your trip</a>
            <a href="/travel-react">Find cheap flights</a>
          </div>
        </header>
    )
}

export default Header
