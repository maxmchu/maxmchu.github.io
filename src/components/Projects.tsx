import * as React from 'react';
import { Item, Label } from 'semantic-ui-react';
import '../styles/projects.scss';

interface IProjectsProps {

}

class Projects extends React.PureComponent<IProjectsProps> {

  public render() {
    return (
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={require("../assets/img/carriage.svg")} />
          <Item.Content>
            <Item.Header content="Carriage" className="project-header"
              as="a" href="https://carriage.maxmchu.com" />
            <Item.Meta content="Smarter and safer paratransit for the 21st century." />
            <Item.Description>
              An automatic ride-scheduling and rider/driver/dispatcher application for
              Cornell Student Disability Service's pre-arranged shuttle service for
              disabled and injured students. Built with React/Redux, AWS, Node.JS, and Google ORTools.
              </Item.Description>
            <Item.Extra>
              <Label content="Cornell CIS BOOM 2019 Highlighted Project" icon="computer"
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
        <Item>
          <Item.Content>
            <Item.Header content="CORD Contributor" as="a" target="_blank" className="project-header"
              href="https://opencord.org" />
            <Item.Meta content="CORD Web UI contributor" />
            <Item.Description>
              As part of co-op internship, created network service graphs, maps, and other UI integrations
              for XOS with CORD using D3.js, Angular.JS, TypeScript, Python, and Java.
              Developed VM configurations and Bash scripts for CORD development and
              deployment with Python, Vagrant, Ansible, and Docker.
              Worked specifically on E-CORD deployment, XOS and its GUI, VNaaS, and other miscellaneous projects.
              </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }

}

export default Projects;