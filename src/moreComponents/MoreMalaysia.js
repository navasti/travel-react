import React, {useRef, useEffect} from 'react';
import malaysia1 from '../img/malaysia1.JPG';
import malaysia2 from '../img/malaysia2.jpg';
import malaysia3 from '../img/malaysia3.jpg';
import {TweenMax} from 'gsap';
const MoreMalaysia = () => {
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.fromTo(section, {duration: 2.5, opacity: 0}, {opacity: 1});
    },[]);
    return (
        <div className="more-container" ref={el => {section = el}}>
            <h1>Malaysia is an amazing place</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id justo dignissim, convallis leo ut, placerat arcu. Nulla vel ante dapibus, posuere ligula eget, feugiat lacus. Fusce ante leo, convallis ac leo quis, fermentum luctus erat. In non volutpat arcu.</p>
            <div className="gallery">
                <div className="pic1">
                    <img src={malaysia1} alt='malaysia1'/>
                </div>
                <div className="pic2">
                    <img src={malaysia2} alt='malaysia2'/>
                </div>
                <div className="pic3">
                    <img src={malaysia3} alt='malaysia3'/>
                </div>
            </div>
        </div>
    )
}

export default MoreMalaysia
