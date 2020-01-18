import React from 'react'
import australia1 from '../img/australia1.jpg';
import australia2 from '../img/australia2.JPG';
import australia3 from '../img/australia3.jpg';
import australia4 from '../img/australia4.JPG';
const MoreAustralia = () => {
    return (
        <div className="more-container">
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
                    <img src={australia4} alt='australia4'/>
                </div>
                <div className="pic4">
                    <img src={australia2} alt='australia2'/>
                </div>
            </div>
        </div>
    )
}

export default MoreAustralia
