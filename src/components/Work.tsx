import * as React from 'react';
import { Divider, Item } from 'semantic-ui-react';

interface IWorkProps {

}

class Work extends React.PureComponent<IWorkProps> {

  public constructor(props: IWorkProps) {
    super(props);
  }

  public render() {
    return (
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={require("../assets/img/amazon.jpg")} />
          <Item.Content>
            <Item.Header>Amazon</Item.Header>
            <Item.Meta>Seattle, WA &mdash; Software Development Engineer Intern, Summer 2018</Item.Meta>
            <Item.Description>
              I worked as an intern on the Amazon Connections team,
              where I built an analytics dashboard using React/Dedux backed
              by a new data aggregation service built using Java, AWS Redshift, and DynamoDB.
          </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image size='tiny' src={require("../assets/img/cornell-cis.jpg")} />
          <Item.Content>
            <Item.Header>Cornell University CIS</Item.Header>
            <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, CS4450: Computer Networking, Spring 2019</Item.Meta>
            <Item.Description>
              Held weekly office hours and graded student assignments
            </Item.Description>
            <Divider />

            <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, CS4780: Machine Learning, Fall 2018</Item.Meta>
            <Item.Description>
              Managed the course Gradescope, worked with eCornell to create an online version of the class,
              graded projects and exams, and held office hours
            </Item.Description>
            <Divider />

            <Item.Meta>Ithaca, NY &mdash; Teaching Assistant, INFO2300: Intermediate Web Development</Item.Meta>
            <Item.Description>
              Led weekly discussion sections, graded projects and exams, and held frequent office hours.
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
    );
  }

}

export default Work;