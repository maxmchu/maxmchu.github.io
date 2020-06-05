import * as React from 'react';
import { Grid, Image, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RouteProps } from 'react-router';

interface IHeaderProps extends RouteProps { }

class Header extends React.PureComponent<IHeaderProps> {

  public render() {
    return (
      <Grid.Row>
        <Grid centered container stretched>
          <Grid.Row>
            <Image src={require("../assets/img/max.png")} size="medium" centered className="home-sig" />
          </Grid.Row>
          <Grid.Row>
            <Menu size='large' secondary>
              <Menu.Item name="home" as={Link} to={"/"} content="Home" active={this.isActive("/")} />
              <Menu.Item name="work" as={Link} to={"/work"} content="Work" active={this.isActive("/work")} />
              <Menu.Item name="projects" as={Link} to={"/projects"} content="Projects" active={this.isActive("/projects")} />
              <Menu.Item name="linkedin" as="a" href="https://www.linkedin.com/in/maxmchu/" target="_blank">
                <Icon name="linkedin" color="blue" />
                LinkedIn
              </Menu.Item>
              <Menu.Item name="github" as="a" href="https://www.github.com/maxmchu" target="_blank">
                <Icon name="github" color="black" />
                GitHub
              </Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    );
  }

  private isActive(name: string) {
    return this.props.location && (name === this.props.location.pathname);
  }

}

export default Header;