import * as React from 'react';
import { Button, Card, Grid, Icon, Menu } from 'semantic-ui-react';
import '../styles/navigation.scss';

interface INavgiationProps {
  type: string;
}

interface INavigationState {

}

class Navigation extends React.Component<INavgiationProps, INavigationState> {

  public constructor(props: INavgiationProps) {
    super(props);
    this.renderSidebar = this.renderSidebar.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  public render() {
    return (this.props.type === 'sidebar') ? this.renderSidebar() : this.renderMenu();
  }

  private renderSidebar(): React.ReactElement {
    return (
      <div className="navigation-background">
        <Grid verticalAlign='middle' centered className="navigation-grid">
          <Grid.Column>
            <Card className="navigation-card">
              <Card.Content>
                <Card.Header>Max Chu</Card.Header>
                <Card.Meta>
                  Cornell A&amp;S '19, CS + Econ<br />
                  Incoming SDE @ Amazon<br />
                </Card.Meta>
                <Card.Description>
                  <p>
                    Born and raised in New York City, avid fan of good pizza/bagels, cycling, and OSRS.
                  </p>
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Icon name='amazon' color='orange' />
                    Incoming SDE, Summer '19<br />
                  </a>
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Icon name='amazon' color='orange' />
                    SDE Intern @ Amazon, Summer '18<br />
                  </a>
                  <a href="https://opennetworking.org" target="_blank" rel="noopener noreferrer">
                    <Icon name='globe' color='blue' />
                    Software Co-op @ Open Networking, Summer/Fall '17<br />
                  </a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button basic as="a" href="https://github.com/maxmchu" target="_blank">
                    <Icon name='github' color='black' />
                  </Button>
                  <Button basic as="a" href="https://www.linkedin.com/in/max-chu-148b2946/" target="_blank">
                    <Icon name='linkedin' color='blue' />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  private renderMenu(): React.ReactElement {
    return (
      <Menu>
        <Menu.Item>
          maxmchu
        </Menu.Item>
      </Menu>
    );
  }

}

export default Navigation;