import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax} from 'gsap';
const Vietnam = () => {
    const indonesia = "indonesia";
    const australia = "australia";
    const vietnam = "vietnam";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.from(section, {duration: 2.5, opacity: 0});
    },[]);
    return (
        <section className="vietnam" ref={el => {section = el}}>
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>vietnam</h1>
                <div className="explore-btn vietnam-btn">
                    <Link to="/more/vietnam">Explore</Link>
                </div>
            </div>
            <Arrows nextPage={indonesia} prevPage={australia}/>
            <CurrentPage current={vietnam}/>
        </section>
    )
}

export default Vietnam
