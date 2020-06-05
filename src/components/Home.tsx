import * as React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

import "../styles/home.scss";

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public render() {
    return (
      <Container fluid>
        <Divider horizontal>
          <Header as="h1">About Me</Header>
        </Divider>
        <Container text>
          <p>
            Hello! I'm Max, a New York City native currently living in Seattle. I work as Software Development Engineer at Amazon,
            and graduated in May 2019 from Cornell, where I majored in Computer Science and Economics and minored in law.
          </p>
          <p>
            I've got plenty of experience working up and down the stack &mdash; especially proficient in working with React + Typescript front-ends,
            Java / Spring backend microservices, Python, and AWS. Feel free to check out my work history and projects!
          </p>
        </Container>
      </Container>
    );
  }

}

export default Home;
