import React from 'react';
import {Link} from 'react-router-dom';
const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <p>welcome</p>
            <Link to="/australia">Explore</Link>
        </div>
    )
}

export default WelcomePage
