import React, {useRef, useEffect} from 'react';
import vietnam1 from '../img/vietnam1.jpg';
import vietnam2 from '../img/vietnam2.jpg';
import vietnam3 from '../img/vietnam3.JPG';
import {TweenMax} from 'gsap';

const MoreVietnam = () => {
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.fromTo(section, {duration: 2.5, opacity: 0}, {opacity: 1});
    },[]);
    return (
        <div className="more-container" ref={el => {section = el}}>
            <h1>Vietnam is an amazing place</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id justo dignissim, convallis leo ut, placerat arcu. Nulla vel ante dapibus, posuere ligula eget, feugiat lacus. Fusce ante leo, convallis ac leo quis, fermentum luctus erat. In non volutpat arcu.</p>
            <div className="gallery">
                <div className="pic1">
                    <img src={vietnam1} alt='vietnam1'/>
                </div>
                <div className="pic2">
                    <img src={vietnam2} alt='vietnam3'/>
                </div>
                <div className="pic3">
                    <img src={vietnam3} alt='vietnam2'/>
                </div>
            </div>
        </div>
    )
}

export default MoreVietnam
