import * as React from 'react';
import { Item } from 'semantic-ui-react';

interface IEducationProps {
  
}

class Work extends React.PureComponent<IEducationProps> {
  public render() {
    return (
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={require("../assets/img/cornell.svg")}/>
          <Item.Content>
            <Item.Header>Cornell University</Item.Header>
            <Item.Meta>Arts and Sciences '19</Item.Meta>
            <Item.Description>
              Majored in Computer Science and Economics, and minored in law.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      )
    }
  }
  
export default Work;