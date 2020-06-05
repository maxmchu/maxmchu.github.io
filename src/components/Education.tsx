import * as React from 'react';
import { Item } from 'semantic-ui-react';

interface IEducationProps { }

class Education extends React.PureComponent<IEducationProps> {
  public render() {
    return (
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={require("../assets/img/cornell.svg")} />
          <Item.Content>
            <Item.Header>Cornell University</Item.Header>
            <Item.Meta>Arts and Sciences '19</Item.Meta>
            <Item.Description>
              I majored in Computer Science and Economics, and minored in Law and Society.
              Served as the Web Team Lead for Big Red Hacks and the Creative Computing Club.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default Education;