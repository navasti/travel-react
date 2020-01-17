import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
const Malaysia = () => {
    return (
        <div className="malaysia">
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div>
                <h1>indonesia</h1>
                <div className="explore-btn malaysia-btn">
                    <Link to="/more/malaysia">Explore</Link>
                </div>
            </div>
            <Arrows/>
            <CurrentPage/>
        </div>
    )
}

export default Malaysia
