import * as React from 'react';
import { Button, Container, Divider, Grid, Image, Header } from 'semantic-ui-react';
import Projects from './Projects';

import "../styles/home.scss";
import Work from './Work';
import Education from './Education';

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public render() {
    return (
      <Grid container fluid className="app-container" columns='equal' stretched style={{ backgroundColor: "#fff", margin: "0 0 5vh 0" }}>
        <Grid.Row stackable="true">
          <Grid.Column>
            <Image src={require("../assets/img/max.png")} size="large" centered className="home-sig" />
            <div className="social-icons">
              <Button color='linkedin' icon='linkedin' as="a" href="https://www.linkedin.com/in/maxmchu/" target="_blank" content="LinkedIn" />
              <Button color='black' icon='github' as="a" href="https://github.com/maxmchu" target="_blank" content="GitHub" />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column stackable="true">
          <Container fluid>
            <Divider horizontal>
              <Header as="h1">About Me</Header>
            </Divider>
            <Container text>
              <p>
                Hello! I'm a Software Development Engineer at Amazon. I graduated in May 2019 from Cornell University's College of Arts and Sciences,
                where I majored in Computer Science and Economics and minored in law.
              </p>
            </Container>          
            <Grid divided="vertically" columns={2} stackable>
              <Grid.Column>
                <Divider horizontal>
                  <Header as="h1">Work</Header>
                </Divider>
                <Work/>
                <Divider horizontal>
                  <Header as ="h1">Education</Header>
                </Divider>
                <Education/>
              </Grid.Column>
              <Grid.Column>
                <Divider horizontal>
                  <Header as="h1">Projects</Header>
                </Divider>
                <Projects />
              </Grid.Column>
            </Grid>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }

}

export default Home;
