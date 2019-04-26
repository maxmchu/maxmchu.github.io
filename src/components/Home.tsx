import * as React from 'react';
import { Container, Divider, Grid, Responsive, Header } from 'semantic-ui-react';
import Projects from './Projects';
import Work from './Work';
import Navigation from './Navigation';

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public constructor(props: IHomeProps) {
    super(props);
  }

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
                I'm Max &mdash; a Computer Science and Economics major at Cornell University's College of Arts and Sciences,
                minoring in Law and Society and graduating in May 2019. I'm the current web lead at
              <a href="http://bigredhacks.com" target="_blank"> Big Red Hacks</a>
                , web and sponsorship lead at the <a href="http://creativecomputing.club" target="_blank">Creative Computing Club</a>,
              and TA for <a href="http://www.cs.cornell.edu/courses/cs4450/2019sp/" target="_blank">CS4450: Computer Networking</a>.
                                    In the past, I have also served as a TA for CS4780: Machine Learning and INFO2300: Intermediate Web Development.
            </p>
              <Divider horizontal>
                <Header as="h1">Work Experience</Header>
              </Divider>
              <p>
                I was a software engineering intern at Amazon in Summer 2018,
                and a software co-op intern at the Open Networking Foundation Summer/Fall 2017.
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