import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import Carriage from './components/Carriage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
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
