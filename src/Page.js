import React from 'react';
import './Page.css';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './mainComponents/WelcomePage';
import Australia from './mainComponents/Australia';
import Vietnam from './mainComponents/Vietnam';
import Indonesia from './mainComponents/Indonesia';
import Malaysia from './mainComponents/Malaysia';
import Thailand from './mainComponents/Thailand';
import MoreAustralia from './moreComponents/MoreAustralia';
import MoreVietnam from './moreComponents/MoreVietnam';
import MoreIndonesia from './moreComponents/MoreIndonesia';
import MoreMalaysia from './moreComponents/MoreMalaysia';
import MoreThailand from './moreComponents/MoreThailand';
import ErrorPage from './mainComponents/ErrorPage';

const Page = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/australia" component={Australia}/>
                <Route path="/vietnam" component={Vietnam}/>
                <Route path="/indonesia" component={Indonesia}/>
                <Route path="/malaysia" component={Malaysia}/>
                <Route path="/thailand" component={Thailand}/>
                <Route path="/more/australia" component={MoreAustralia}/>
                <Route path="/more/vietnam" component={MoreVietnam}/>
                <Route path="/more/indonesia" component={MoreIndonesia}/>
                <Route path="/more/malaysia" component={MoreMalaysia}/>
                <Route path="/more/thailand" component={MoreThailand}/>
                <Route component={ErrorPage}/>
            </Switch>
        </div>
    )
}

export default Page
