import React, {useRef, useEffect}  from 'react';
import indonesia1 from '../img/indonesia1.JPG';
import indonesia2 from '../img/indonesia2.jpg';
import indonesia3 from '../img/indonesia3.jpg';
import {TweenMax} from 'gsap';
const MoreIndonesia = () => {
    let section = useRef(null);
    useEffect(()=>{
        TweenMax.fromTo(section, {duration: 2.5, opacity: 0}, {opacity: 1});
    },[]);
    return (
        <div className="more-container" ref={el => {section = el}}>
            <h1>Indonesia is an amazing place</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi id justo dignissim, convallis leo ut, placerat arcu. Nulla vel ante dapibus, posuere ligula eget, feugiat lacus. Fusce ante leo, convallis ac leo quis, fermentum luctus erat. In non volutpat arcu.</p>
            <div className="gallery">
                <div className="pic1">
                    <img src={indonesia1} alt='indonesia1'/>
                </div>
                <div className="pic2">
                    <img src={indonesia2} alt='indonesia3'/>
                </div>
                <div className="pic3">
                    <img src={indonesia3} alt='indonesia2'/>
                </div>  
            </div>
        </div>
    )
}

export default MoreIndonesia
