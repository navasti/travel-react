import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax} from 'gsap';

const Indonesia = () => {
    const thailand = "thailand";
    const vietnam = "vietnam";
    const indonesia = "indonesia";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.from(section, {duration: 2.5, opacity: 0});
    },[]);
    return (
        <section className="indonesia" ref={el => {section = el}}>
            <MobileMenu/>
            <DesktopMenu/>
            <Header/>
            <div className="content">
                <h1>indonesia</h1>
                <div className="explore-btn indonesia-btn">
                    <Link to="/more/indonesia">Explore</Link>
                </div>
            </div>
            <Arrows nextPage={thailand} prevPage={vietnam}/>
            <CurrentPage current={indonesia}/>
        </section>
    )
}

export default Indonesia
