import React from 'react'
import {Link} from 'react-router-dom';

const CurrentPage = () => {
    return (
        <div className="current-page">
          <Link to="/australia" className="active"><i className="fas fa-circle"></i></Link>
          <Link to="/vietnam"><i className="fas fa-circle"></i></Link>
          <Link to="/indonesia"><i className="fas fa-circle"></i></Link>
          <Link to="/thailand"><i className="fas fa-circle"></i></Link>
          <Link to="/malaysia"><i className="fas fa-circle"></i></Link>
        </div>
    )
}

export default CurrentPage
