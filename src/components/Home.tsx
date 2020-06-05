import * as React from 'react';
import { Container, Divider, Header, Image, Grid } from 'semantic-ui-react';

import "../styles/home.scss";

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public render() {
    return (
      <Container fluid text>
        <Divider horizontal>
          <Header as="h1">About Me</Header>
        </Divider>

        <Grid columns={2} stackable>
          <Grid.Column width={4}>
            <Image size="small" src={require("../assets/img/badge.jpeg")} circular centered />
          </Grid.Column>
          <Grid.Column width={12}>
            <Container>
              <p>
                Hello! I'm Max, a New York City native currently living in Seattle. I work as Software Development Engineer at Amazon,
                and graduated in May 2019 from Cornell, where I majored in Computer Science and Economics and minored in law.
              </p>
              <p>
                I've got plenty of experience working up and down the stack &mdash; especially proficient in working with React + Typescript front-ends,
                Java backend microservices, Python, and AWS. Feel free to check out my work history and projects!
              </p>
            </Container>
          </Grid.Column>
        </Grid>

      </Container >
    );
  }

}

export default Home;
