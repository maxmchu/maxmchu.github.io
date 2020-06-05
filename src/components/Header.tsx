import * as React from 'react';
import { Dropdown, Grid, Image, Menu, Icon, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RouteProps } from 'react-router';
import '../styles/header.scss';

interface IHeaderProps extends RouteProps { }

class Header extends React.PureComponent<IHeaderProps> {

  public render() {
    return (
      <Grid.Row className="full-width" stretched>
        <Responsive minWidth={768} as={Grid} centered container stretched>
          <Grid.Row>
            <Image src={require("../assets/img/max.png")} size="medium" centered className="home-sig" />
          </Grid.Row>
          <Grid.Row>
            {this.renderDesktopMenu()}
          </Grid.Row>
        </Responsive>
        <Responsive maxWidth={767} className="full-width">
          {this.renderMobileMenu()}
        </Responsive>
      </Grid.Row>
    );
  }

  private renderDesktopMenu() {
    return (
      <Menu size='large' secondary stackable>
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
    )
  }

  private renderMobileMenu() {
    return (
      <Menu>
        <Menu.Item>
          maxmchu
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown icon="bars">
              <Dropdown.Menu>
                <Dropdown.Item text="Home" icon="home" as={Link} to={"/"} />
                <Dropdown.Item text="Work" icon="briefcase" as={Link} to={"/work"} />
                <Dropdown.Item text="Projects" icon="pencil" as={Link} to={"/projects"} />
                <Dropdown.Item text="LinkedIn" icon="linkedin" as="a" href="https://www.linkedin.com/in/maxmchu/" target="_blank" />
                <Dropdown.Item text="GitHub" icon="github" as="a" href="https://www.github.com/maxmchu" target="_blank" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

  private isActive(name: string) {
    return this.props.location && (name === this.props.location.pathname);
  }

}

export default Header;