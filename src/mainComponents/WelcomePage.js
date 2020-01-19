import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {TweenMax} from 'gsap';

const WelcomePage = () => {
    let h1 = useRef(null);
    let section = useRef(null);
    let btn = useRef(null);
    useEffect(()=>{
        TweenMax.from(h1, {duration: 2.5, opacity: 0});
        TweenMax.from(section, {duration: 2, opacity: 0});
        TweenMax.from(btn, {duration: 3, opacity: 0},);
    },[]);
    return (
        <section className="welcome-page" ref={el => {section = el}}>
            <h1 ref={el => {h1 = el}}>Are you ready to discover some amazing travel destinations?</h1>
            <Link to="/australia" className="explore-btn" ref={el => {btn = el}}>Discover</Link>
        </section>
    )
}

export default WelcomePage
