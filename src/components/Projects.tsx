import * as React from 'react';
import { Item, Label, Container, Divider, Header } from 'semantic-ui-react';
import YouTube, { Options } from 'react-youtube';
import '../styles/projects.scss';

interface IProjectsProps {

}

class Projects extends React.PureComponent<IProjectsProps> {

  public render() {
    const videoOpts: Options = {
      height: '300',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        loop: 1,
        controls: 0,
        rel: 0
      }
    };
    return (
      <Container fluid text>
        <Divider horizontal>
          <Header as="h1">Projects</Header>
        </Divider>
        <Item.Group divided>
          <Item>
            <Item.Image size='tiny' src={require("../assets/img/carriage.svg")} />
            <Item.Content>
              <Item.Header content="Carriage" className="project-header" target="_blank"
                as="a" href="https://carriage.maxmchu.com" />
              <Item.Meta content="Smarter and safer paratransit for the 21st century." />
              <Item.Description>
                An automatic ride-scheduling and rider/driver/dispatcher application for
                Cornell Student Disability Service's pre-arranged shuttle service for
                disabled and injured students. Built with React/Redux, AWS, Node.JS, and Google ORTools.
              </Item.Description>
              <Item.Description>
                Current initiative project under Cornell DTI engineering project team.
              </Item.Description>
              <Item.Description>
                <YouTube videoId="J2ptsT_dX9Q" opts={videoOpts} />
              </Item.Description>
              <Item.Extra>
                <Label content="Cornell CIS BOOM 2019" icon="computer"
                  as="a" href="https://www.cis.cornell.edu/boom-2019-showcasing-over-40-exciting-student-tech-projects"
                  target="_blank" />
                <Label content="2019 Big Idea Competition Finalist" icon="trophy"
                  as="a" href="https://www.facebook.com/lifechanginglabs/posts/2403040376393825" target="_blank" />
                <Label content="View on GitHub" icon="github"
                  as="a" href="https://github.com/maxmchu/carriage-web" target="_blank" />
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='tiny' src={require("../assets/img/brh-vertical.png")} />
            <Item.Content>
              <Item.Header content="Big Red Hacks" as="a" target="_blank" className="project-header"
                href="https://bigredhacks.com" />
              <Item.Meta content="Web lead at Cornell's annual student-run hackathon" />
              <Item.Description>
                Lead web team to update Big Red Hacks's public website and admin
                dashboard handling hackathon applications and logistics.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header content="CourseMonitor" as="a" target="_blank" className="project-header"
                href="https://github.com/maxmchu/coursemonitor" />
              <Item.Meta content="Don't waste time waiting for classes to open. Get texted." />
              <Item.Description>
                This Python program tracks the open status of Cornell classes from the
                university's online Course Roster (e.g. open, closed, or waitlist),
                and sends an SMS notification via Twilio to the user when a spot in a class has opened up.
                </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }

}

export default Projects;
