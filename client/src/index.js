import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact'
import SignUp from './components/SignUp';
import authGuard from './components/HOCs/authGuard'
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={authGuard(Dashboard)} />
        </App>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
