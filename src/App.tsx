import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';


class App extends Component {

  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
