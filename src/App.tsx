import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import Navigation from './components/Navigation';
import { Grid, Responsive } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Responsive as={Navigation} type="menu" maxWidth={767} />
        <Grid container className="app-container" columns='equal' stretched>
          <Responsive as={Grid.Column} width={4} stackable="true" minWidth={768} className="app-navigation" stretched>
            <Navigation type="sidebar" />
          </Responsive>
          <Grid.Column stackable="true">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
