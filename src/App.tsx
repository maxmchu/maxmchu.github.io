import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import createHistory from "history/createBrowserHistory";

import Home from './components/Home';
import Carriage from './components/Carriage'


class App extends Component {

  public render() {
    return (
      <div className="App">
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/carriage" component={Carriage} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
