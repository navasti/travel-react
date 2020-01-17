import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
const Indonesia = () => {
    return (
        <div className="indonesia">
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>indonesia</h1>
                <div className="explore-btn indonesia-btn">
                    <Link to="/more/indonesia">Explore</Link>
                </div>
            </div>
            <Arrows/>
            <CurrentPage/>
        </div>
    )
}

export default Indonesia
