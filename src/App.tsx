import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './App.scss';
import { Grid, Divider, Container } from 'semantic-ui-react';

import Home from './components/Home';
import Header from './components/Header';
import Education from './components/Education'
import Projects from './components/Projects';
import Work from './components/Work';

const HeaderRouter = withRouter((props) => <Header {...props} />)

class App extends Component {

  public render() {
    return (
      <div className="App">
        <Router>
          <Grid className="app-container" stretched style={{ backgroundColor: "#fff", margin: "0 0 0 0" }}>
            <HeaderRouter />
            <Grid.Row>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/edu" component={Education} />
                <Route exact path="/projects" component={Projects} />
                <Route component={Home} />
              </Switch>
            </Grid.Row>
            <Grid.Row />
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
