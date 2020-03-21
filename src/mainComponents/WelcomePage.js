import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {TweenMax, gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

const WelcomePage = () => {
    gsap.registerPlugin(CSSPlugin);
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.to(section, {duration: 2, opacity: 1});
    });
    return (
        <section style={{opacity: 0}} className="welcome-page" ref={el => {section = el}}>
            <h1>Are you ready to discover some amazing travel destinations?</h1>
            <Link to="/australia" className="explore-btn">Discover</Link>
        </section>
    )
}

export default WelcomePage
