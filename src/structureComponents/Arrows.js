import React from 'react';
import {Link} from 'react-router-dom';

const Arrows = () => {
    return (
        <>
        <div className="right">
            <Link to="/vietnam"><i className="fas fa-arrow-right"></i></Link>
        </div>
        <div className="left">
            <Link to="/vietnam"><i className="fas fa-arrow-left"></i></Link>
        </div>
        </>
    )
}

export default Arrows
