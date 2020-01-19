import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {TweenMax, gsap} from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

const WelcomePage = () => {
    gsap.registerPlugin(CSSPlugin);
    let h1 = useRef(null);
    let section = useRef(null);
    let btn = useRef(null);
    useEffect(()=>{
        TweenMax.to(h1, {duration: 2.5, opacity: 1});
        TweenMax.to(section, {duration: 2, opacity: 1});
        TweenMax.to(btn, {duration: 3, opacity: 1});
    },[]);
    return (
        <section 
        style={{opacity: 0}}
        className="welcome-page" 
        ref={el => {section = el}}
        >
            <h1 ref={el => {h1 = el}}>Are you ready to discover some amazing travel destinations?</h1>
            <Link to="/australia" className="explore-btn" ref={el => {btn = el}}>Discover</Link>
        </section>
    )
}

export default WelcomePage
