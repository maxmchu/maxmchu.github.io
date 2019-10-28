import * as React from 'react';
import { Button, Container, Divider, Grid, Image, Header } from 'semantic-ui-react';
import Projects from './Projects';

import "../styles/home.scss";

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public render() {
    return (
      <Grid container fluid className="app-container" columns='equal' stretched style={{ backgroundColor: "#fff" }}>
        <Grid.Row stackable="true">
          <Grid.Column>
            <Image src={require("../assets/img/max.png")} size="large" centered className="home-sig" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column stackable="true">
          <Container text>
            <Divider horizontal>
              <Header as="h1">About Me</Header>
            </Divider>
            <p>
              Hello! I'm a Software Development Engineer at Amazon. I graduated in May 2019 from Cornell University's College of Arts and Sciences,
              where I majored in Computer Science and Economics major and minored in law.
            </p>
            <p>
              I was previously an SDE Intern at Amazon, a software co-op intern at the Open Networking Foundation, and
              Teaching Assistant at Cornell for machine learning, web development, and computer networking.
            </p>
            <div className="social-icons">
              <Button color='linkedin' icon='linkedin' as="a" href="https://www.linkedin.com/in/maxmchu/" target="_blank" content="LinkedIn" />
              <Button color='black' icon='github' as="a" href="https://github.com/maxmchu" target="_blank" content="GitHub" />
            </div>
            {/* <Work /> */}
            <Divider horizontal>
              <Header as="h1">Projects</Header>
            </Divider>

            <Projects />

          </Container>
        </Grid.Column>
      </Grid>
    );
  }

}

export default Home;