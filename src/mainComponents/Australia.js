import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
class Australia extends Component{
    render(){
        return (
            <section className="australia">
                <MobileMenu/>
                <DesktopMenu/>
                <Header/>
                <div className="content">
                    <h1>Australia</h1>
                    <div className="explore-btn australia-btn">
                        <Link to="/more/australia">Explore</Link>
                    </div>
                </div>
                <Arrows/>
                <CurrentPage/>
            </section>
        )
    }
}

export default Australia
