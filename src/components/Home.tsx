import * as React from 'react';
import { Container, Divider, Grid, Responsive, Header } from 'semantic-ui-react';
import Projects from './Projects';
import Navigation from './Navigation';

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public render() {
    return (
      <Grid>
        <Responsive as={Navigation} type="menu" maxWidth={767} />
        <Grid container className="app-container" columns='equal' stretched>
          <Responsive as={Grid.Column} width={4} stackable="true" minWidth={768} className="app-navigation" stretched>
            <Navigation type="sidebar" />
          </Responsive>
          <Grid.Column stackable="true">
            <Container text>
              <Divider horizontal>
                <Header as="h1">About Me</Header>
              </Divider>
              <p>
                I'm Max &mdash; a Software Development Engineer at Amazon . I was a Computer Science and Economics major at Cornell University's College of Arts and Sciences,
                minored in law. In the past, I have been an intern at Amazon and the Open Networking Foundation.
              </p>
              {/* <Work /> */}
              <Divider horizontal>
                <Header as="h1">Projects</Header>
              </Divider>

              <Projects />

            </Container>
          </Grid.Column>
        </Grid>
      </Grid>
    );
  }

}

export default Home;