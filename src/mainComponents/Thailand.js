import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax} from 'gsap';
const Thailand = () => {
    const malaysia = "malaysia";
    const indonesia = "indonesia";
    const thailand = "thailand";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.from(section, {duration: 2.5, opacity: 0});
    },[]);
    return (
        <section className="thailand" ref={el => {section = el}}>
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>thailand</h1>
                <div className="explore-btn thailand-btn">
                    <Link to="/more/thailand">Explore</Link>
                </div>
            </div>
            <Arrows nextPage={malaysia} prevPage={indonesia}/>
            <CurrentPage current={thailand}/>
        </section>
    )
}

export default Thailand
