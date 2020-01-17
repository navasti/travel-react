import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
const Thailand = () => {
    return (
        <div className="thailand">
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div>
                <h1>thailand</h1>
                <div className="explore-btn thailand-btn">
                    <Link to="/more/thailand">Explore</Link>
                </div>
            </div>
            <Arrows/>
            <CurrentPage/>
        </div>
    )
}

export default Thailand
