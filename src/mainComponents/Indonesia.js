import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../structureComponents/Header';
import Arrows from '../structureComponents/Arrows';
import CurrentPage from '../structureComponents/CurrentPage';
import DesktopMenu from '../structureComponents/DesktopMenu';
import MobileMenu from '../structureComponents/MobileMenu';
import {TweenMax, gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

const Indonesia = () => {
    gsap.registerPlugin(CSSPlugin);
    const thailand = "/thailand";
    const vietnam = "/vietnam";
    const indonesia = "/indonesia";
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.to(section, {duration: 2.5, opacity: 1});
    },[]);
    return (
        <section 
        style={{opacity: 0}}
        className="indonesia" 
        ref={el => {section = el}}>
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
