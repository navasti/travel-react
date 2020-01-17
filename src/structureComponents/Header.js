import React from 'react'

const Header = () => {
    return (
        <header id="header">
        <div className="hamburger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id="desktop-tips">
            <a href="/">Plan your trip</a>
            <a href="/">Find cheap flights</a>
          </div>
        </header>
    )
}

export default Header
