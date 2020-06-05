import * as React from 'react';
import { Divider, Item, Header, Container } from 'semantic-ui-react';

interface IWorkProps {

}

class Work extends React.PureComponent<IWorkProps> {

  public render() {
    return (
      <Container fluid text>
        <Divider horizontal>
          <Header as="h1">Work History</Header>
        </Divider>

        <Item.Group divided>
          <Item>
            <Item.Image size='tiny' src={require("../assets/img/amazon.jpg")} />
            <Item.Content>
              <Item.Header>Amazon</Item.Header>
              <Item.Meta>Seattle, WA &mdash; Software Development Engineer, August 2019 - present</Item.Meta>
              <Item.Description>
                Returned to Amazon Connections team.
              </Item.Description>
              <Divider />
              <Item.Meta>Seattle, WA &mdash; Software Development Engineer Intern, Summer 2018</Item.Meta>
              <Item.Description>
                I worked as an intern on the Amazon Connections team,
                where I built an analytics dashboard using React/Redux and backed
                by a new data aggregation service built using Java, AWS Redshift, and DynamoDB.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='tiny' src={require("../assets/img/cornell-cis.jpg")} />
            <Item.Content>
              <Item.Header>Cornell University CIS</Item.Header>
              <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, CS4450: Computer Networking, Spring 2019</Item.Meta>
              <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, CS4780: Machine Learning, Fall 2018</Item.Meta>
              <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, INFO2300: Intermediate Web Development</Item.Meta>
              <Item.Description>
                Worked with eCornell to create an online version of CS4780, managed Gradescope,
                graded projects and exams, held office hours, and answered questions on Piazza.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='tiny' src={require("../assets/img/onf-logo.png")} />
            <Item.Content>
              <Item.Header>Open Networking Foundation</Item.Header>
              <Item.Meta>Menlo Park, CA &mdash; Software Engineering Co-op Intern, Summer/Fall 2017</Item.Meta>
              <Item.Description>
                Worked on CORD UI features and components in Angular.JS, TypeScript, D3.js, and Python.
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }

}

export default Work;