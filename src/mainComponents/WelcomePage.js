import React from 'react';
import {Link} from 'react-router-dom';
const WelcomePage = () => {
    return (
        <section className="welcome-page">
            <h1>Are you ready to discover some amazing travel destinations?</h1>
            <Link to="/australia" className="explore-btn">Discover</Link>
        </section>
    )
}

export default WelcomePage
