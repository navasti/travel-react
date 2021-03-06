import React, { useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax, gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

const Australia = () => {
    gsap.registerPlugin(CSSPlugin);
    const vietnam = "/vietnam";
    const malaysia = "/malaysia";
    const australia = "/australia";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.to(section, {duration: 2.5, opacity: 1});
    },[]);
    return (
        <section 
        style={{opacity: 0}}
        className="australia" 
        ref={el => {section = el}}>
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>Australia</h1>
                <div className="explore-btn australia-btn">
                    <Link to="/more/australia">Explore</Link>
                </div>
            </div>
            <Arrows nextPage={vietnam} prevPage={malaysia}/>
            <CurrentPage current={australia}/>
        </section>
    )
}

export default Australia
