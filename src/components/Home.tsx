import * as React from 'react';
import { Container } from 'semantic-ui-react';

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public constructor(props: IHomeProps) {
    super(props);
  }

  public render() {
    return (
      <Container text>
        <h1>Hello World!</h1>
        <h2>About Me</h2>
        <p>
          I'm a CS and Econ major at Cornell University, minoring in Law and Society
          and graduating in May 2019. I'm current web lead at
          <a href="http://bigredhacks.com" target="_blank"> Big Red Hacks</a>
          , web and sponsorship lead at the <a href="http://creativecomputing.club" target="_blank">Creative Computing Club</a>,
          and TA for <a href="http://www.cs.cornell.edu/courses/cs4450/2019sp/" target="_blank">CS4450</a>.
        </p>
        <p>
          I've interned at Amazon in Seattle, WA as a Software Intern, and at
          the Open Networking Foundation in Menlo Park, CA as a Software Co-op Intern.
        </p>

        <h2>Projects</h2>

        <h3><a href="https://github.com/maxmchu/adalift-web">ADALift (in progress)</a></h3>
        <p>
          A new automatic ride-scheduling and rider/driver/dispatcher application for
          Cornell Student Disability Service's pre-arranged shuttle service for
          disabled and injured students. Currently being built with React/Redux,
          AWS, and Node.JS.
        </p>

        <h3><a href="https://github.com/maxmchu/coursemonitor" target="_blank">CourseMonitor</a></h3>
        <p>
          This Python program tracks the open status of Cornell classes from the
          university's online Course Roster (e.g. open, closed, or waitlist),
          and sends an SMS notification via Twilio to the user when a spot in a class has opened up.
        </p>

        <h3><a href="https://bigredhacks.com" target="_blank">Big Red Hacks</a></h3>
        <p>
          Currently leading web team to renovate Big Red Hacks's public website
          and admin dashboard. Admin dashboard handles hackathon applications and
          logistics.
        </p>

        <h3><a href="https://opencord.org" target="_blank">CORD Contributor</a></h3>
        <p>
          As part of co-op internship, created network service graphs, maps, and other UI integrations
          for XOS with CORD using D3.js, Angular.JS, TypeScript, Python, and Java.
          Developed VM configurations and Bash scripts for CORD development and
          deployment with Python, Vagrant, Ansible, and Docker. Worked specifically on E-CORD deployment, XOS and its GUI, VNaaS, and other miscellaneous projects.
        </p>
      </Container>
    );
  }

}

export default Home;