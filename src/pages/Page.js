import './Page.css';
import React, { Component } from 'react';
import {Switch, Route, Link} from'react-router-dom';
import AustraliaContent from '../content/AustraliaContent';
import VietnamContent from '../content/VietnamContent';
import IndonesiaContent from '../content/IndonesiaContent';
import MalaysiaContent from '../content/MalaysiaContent';
import ThailandContent from '../content/ThailandContent';
import ErrorPage from './ErrorPage';
class Page extends Component {
  render() {
    const previousPage = '/malaysia';
    const nextPage = '/vietnam';
    return (
      <div id="wrapper">
        <div className="welcome-container">
            <h1>Ready to discover some amazing travel destinations?</h1>
            <div className="discover-btn">Discover</div>
        </div>
        <header id="header">
          <nav id="nav">
            <a href="/">Plan your trip</a>
            <a href="/">Find cheap flights</a>
          </nav>
          <div className="hamburger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </header>
        <Link to={nextPage}><i className="fas fa-arrow-right"></i></Link>
        <Link to={previousPage}><i className="fas fa-arrow-left"></i></Link>
        <main className="content">
          <Switch>
            <Route exact path="/" component={AustraliaContent}/>
            <Route path="/australia" component={AustraliaContent}/>
            <Route path="/vietnam" component={VietnamContent}/>
            <Route path="/indonesia" component={IndonesiaContent}/>
            <Route path="/thailand" component={ThailandContent}/>
            <Route path="/malaysia" component={MalaysiaContent}/>
            <Route component={ErrorPage}/>
          </Switch>
        </main>
        <div className="current-page">
          <Link to="/australia" className="active"><i className="fas fa-circle"></i></Link>
          <Link to="/vietnam"><i className="fas fa-circle"></i></Link>
          <Link to="/indonesia"><i className="fas fa-circle"></i></Link>
          <Link to="/thailand"><i className="fas fa-circle"></i></Link>
          <Link to="/malaysia"><i className="fas fa-circle"></i></Link>
        </div>
      </div>
    )
  }
}

export default Page;