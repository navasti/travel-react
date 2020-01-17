import React from 'react';
import {Link} from 'react-router-dom';
const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h1>Are you ready to discover some amazing travel destinations?</h1>
            <Link to="/australia" className="explore-btn">Discover</Link>
        </div>
    )
}

export default WelcomePage
