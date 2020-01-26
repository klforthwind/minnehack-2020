import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

registerServiceWorker();

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/dashboard" component={App2} />
            <Route path="/explore" component={App2} />
            <Route path="/auth" component={App2} />
            <Route path="/profile" component={App2} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
