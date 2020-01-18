import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
const Vietnam = () => {
    return (
        <section className="vietnam">
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>vietnam</h1>
                <div className="explore-btn vietnam-btn">
                    <Link to="/more/vietnam">Explore</Link>
                </div>
            </div>
            <Arrows/>
            <CurrentPage/>
        </section>
    )
}

export default Vietnam
