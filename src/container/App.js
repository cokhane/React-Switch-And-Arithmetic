import React, { Component } from 'react';
import {
  Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Arrays from './array/array.js';
import Forloop from './forloop/forloop.js';
import Header from './header/header.js';
import Dashboard from './dashboard/dashboard.js';

import history from '../history/history.js';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>


        <div>
          <Router history={history}>
            <Switch>
              <Route path="/array" component={Arrays}/>
              <Route path="/forloop" component={Forloop}/>
              <Route path="/" component={Dashboard}/>
            </Switch>
          </Router>
        </div>


      </div>
    );
  }
}

export default App;
