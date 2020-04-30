import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './components/HomePage'
import * as serviceWorker from './serviceWorker';
const routing = (

  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={HomePage} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
