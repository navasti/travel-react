import React, {useRef, useEffect} from 'react';
import australia1 from '../img/australia1.jpg';
import australia2 from '../img/australia2.JPG';
import australia3 from '../img/australia3.jpg';
import {TweenMax} from 'gsap';
const MoreAustralia = () => {
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.from(section, {duration: 2.5, opacity: 0});
    },[]);
    return (
        <div className="more-container" ref={el => {section = el}}>
            <h1>Australia is an amazing place</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id justo dignissim, convallis leo ut, placerat arcu. Nulla vel ante dapibus, posuere ligula eget, feugiat lacus. Fusce ante leo, convallis ac leo quis, fermentum luctus erat. In non volutpat arcu.</p>
            <div className="gallery">
                <div className="pic1">
                    <img src={australia1} alt='australia1'/>
                </div>
                <div className="pic2">
                    <img src={australia3} alt='australia3'/>
                </div>
                <div className="pic3">
                    <img src={australia2} alt='australia2'/>
                </div>
            </div>
        </div>
    )
}

export default MoreAustralia
