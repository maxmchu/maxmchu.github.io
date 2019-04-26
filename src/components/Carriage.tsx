import * as React from 'react';
import { Grid, Container, List, Header, Image, Menu, Divider, Statistic } from 'semantic-ui-react';
import '../App.scss';
import '../styles/carriage.scss';

interface ICarriageProps {

}

class Carriage extends React.PureComponent<ICarriageProps> {

  public constructor(props: ICarriageProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Menu inverted className="fixed-menu">
          <Menu.Item>
            <Image src={require("../assets/carriage/carriage-logo.png")} size="small" />
          </Menu.Item>
        </Menu>
        <Grid stackable verticalAlign="middle" >
          <Grid.Row className="mockup-bg">
            <Grid.Column width={10} className="image-container" >
              <Image src={require("../assets/carriage/mockups.png")} size="massive"
                verticalAlign="middle" />
            </Grid.Column>
            <Grid.Column width={6} className="image-container">
              <Header as="h1" className="carriage-header" textAlign="right">
                Smarter and safer paratransit built for the 21st century.
              </Header>
              <List className="text-align-right white-text">
                <List.Item>Rider and driver companion apps</List.Item>
                <List.Item>Automatic ride scheduling</List.Item>
                <List.Item>Dispatcher dashboard and service analytics</List.Item>
              </List>
              <List className="text-align-right white-text">
                <List.Item>Featured project in BOOM 2019</List.Item>
                <List.Item>2019 Big Idea Competition Nonprofit Finalist</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="row-top-padding">
            <Grid.Column width={16}>
              <Container text className="text-align-center">
                <Header as="h1" className="carriage-title">
                  What is paratransit? Why does it matter?
                </Header>
                <p className="carriage-content">
                  Paratransit consists of transportation services for people
                  with permament or temporary mobility issues,
                  <span className="blue-highlight"> providing essential access to transportation.</span>
                </p>
                <p className="carriage-content">
                  Under the Americans with Disabilities Act, public transit agencies and universities
                  <span className="blue-highlight"> are required to provide paratransit service.</span>
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="equal" verticalAlign="top" className="row-padding">
            <Grid.Column>
              <Statistic size="tiny" className="carriage-stat">
                <Statistic.Value className="carriage-stat-value">36.3 million</Statistic.Value>
                <Statistic.Label className="carriage-stat-label">Americans with one or more disabilities</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" className="carriage-stat">
                <Statistic.Value className="carriage-stat-value">11 million</Statistic.Value>
                <Statistic.Label className="carriage-stat-label">disabled Americans who have dificulty accessing transportation</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" className="carriage-stat">
                <Statistic.Value className="carriage-stat-value">550,000+</Statistic.Value>
                <Statistic.Label className="carriage-stat-label">
                  disabled Americans who do not leave their homes at all
                  </Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Container text className="text-align-center">
                <p className="carriage-content">
                  Accessible ridesharing options aren't always
                <span className="blue-highlight"> available or affordable</span>.
              </p>
                <Divider hidden />
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="retro-bg" verticalAlign="top">
            <Grid.Column width={8} className="column-lr-padding">
              <Header as="h1" className="gold-text">
                Current paratransit tech is stuck in the 1990s.
              </Header>
              <List className="gold-text carriage-content" bulleted>
                <List.Item>Requests are made by phone several days in advance</List.Item>
                <List.Item>Dispatchers manually schedule rides every morning</List.Item>
                <List.Item>Schedules are distributed to drivers in paper</List.Item>
              </List>
              <Header className="gold-text" as="h3">
                Delays snowball in the system, and vulnerable riders are left
                stranded outside waiting for their drivers.
              </Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src={require("../assets/carriage/retro-screen.png")} fluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="equal" className="row-no-padding">
            <Grid.Column className="mockup-bg expand-column" verticalAlign="middle">
              <Image src={require('../assets/carriage/mockups.png')} size="massive" />
            </Grid.Column>
            <Grid.Column className="white-bg row-padding text-align-center">

              <Header as="h1" className="blue-highlight larger-title">
                Introducing Carriage
                </Header>
              <p className="blue-highlight carriage-content">
                A 21st century solution to paratransit.
                </p>
              <Header as="h2">
                Driver and rider companion apps
                </Header>
              <p className="carriage-content">
                GPS tracking and shared contact informations provides
                safety and accountability.
                </p>
              <Header as="h2">
                Automatic scheduling and service analytics
                </Header>
              <p className="carriage-content">
                Reduced stress, more efficient routing, and the ability to adapt
                to changes on demand. Service analytics drive smarter service decisions.
                </p>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="equal" className="row-no-padding">

            <Grid.Column className="white-bg row-padding text-align-center">

              <Header as="h1" className="larger-title">
                Interested in working on Carriage?
              </Header>
              <p className="carriage-content">
                Carriage is still under development,
                and we need all the help we can get! Reach out to us!
              </p>

            </Grid.Column>
            <Grid.Column className="expand-column remove-padding" verticalAlign="middle">
              <Image src={require("../assets/carriage/work.jpg")} size="massive" verticalAlign="middle" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ "background-color": "#ecf0f1" }}>
            <Grid.Column width={16}>
              <Container text textAlign="center">
                <Header as="h3" content="Carriage" style={{ "margin-bottom": 0 }} />
                <p>
                  Built by Max Chu and Jessica Hong, 2019
                </p>
              </Container>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

}

export default Carriage;
