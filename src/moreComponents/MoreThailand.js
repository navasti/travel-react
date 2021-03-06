import React, {useRef, useEffect} from 'react';
import thailand1 from '../img/thailand1.jpg';
import thailand2 from '../img/thailand2.jpg';
import thailand3 from '../img/thailand3.jpg';
import {TweenMax} from 'gsap';
const MoreThailand = () => {
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.fromTo(section, {duration: 2.5, opacity: 0}, {opacity: 1});
    },[]);
    return (
        <div className="more-container" ref={el => {section = el}}>
            <h1>Thailand is an amazing place</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id justo dignissim, convallis leo ut, placerat arcu. Nulla vel ante dapibus, posuere ligula eget, feugiat lacus. Fusce ante leo, convallis ac leo quis, fermentum luctus erat. In non volutpat arcu.</p>
            <div className="gallery">
                <div className="pic1">
                    <img src={thailand1} alt='thailand1'/>
                </div>
                <div className="pic2">
                    <img src={thailand2} alt='thailand3'/>
                </div>
                <div className="pic3">
                    <img src={thailand3} alt='thailand4'/>
                </div>
            </div>
        </div>
    )
}

export default MoreThailand
