import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><Page/></Router>, document.getElementById('root'));