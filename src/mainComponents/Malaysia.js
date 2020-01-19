import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax} from 'gsap';
const Malaysia = () => {
    const australia = "australia";
    const thailand = "thailand";
    const malaysia = "malaysia";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.from(section, {duration: 2.5, opacity: 0});
    },[]);
    return (
        <section className="malaysia" ref={el => {section = el}}>
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>malaysia</h1>
                <div className="explore-btn malaysia-btn">
                    <Link to="/more/malaysia">Explore</Link>
                </div>
            </div>
            <Arrows nextPage={australia} prevPage={thailand}/>
            <CurrentPage current={malaysia}/>
        </section>
    )
}

export default Malaysia
