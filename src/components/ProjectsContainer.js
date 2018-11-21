import React from 'react'
import { Container, Header, Card } from 'semantic-ui-react'
import Project from './Project'

class ProjectsContainer extends React.Component {
  state = {
    projects: [
      {
        title: "AUR-Update",
        description: `A work-in-progress CLI shell script pacman wrapper the Arch User Repository.
        
        Functionality includes:
        - Install new AUR packages
        - Remove installed AUR packages
        - Maintain a list of installed AUR packages
        - Update AUR packages`,
        img_url: 'https://i.imgur.com/pDaYecW.gif',
        link: 'https://github.com/wbdana/aur-update',
      },
      {
        title: "Asteroids Online",
        description: "A work-in-progress clone of the classic arcade game Asteroids made using React and Redux. Future goals for this project include a Python/Django back end to facilitate high scores (and possibly multiplayer!), improved performance optimizations, and better animations and game features (visible thrusters, UFOs, etc.), and a mobile version using React Native.",
        img_url: 'https://i.imgur.com/SzsSGDt.jpg',
        link: 'https://asteroids-online.herokuapp.com'
      },
      {
        title: "Connected Text",
        description: "Provides Google Docs-like text editing functionality for programmers, and a chatroom for each file opened in the app’s editor. Uses React Ace package to provide a text editor interface in React front-end, and uses GitHub API to pull content of individual files from GitHub into React Ace text editor. PostgreSQL database on a Rails API back-end. Uses Action Cable to facilitate real-time updates of changes in text editor and chat functionality, etc.",
        img_url: 'https://i.imgur.com/7jG8L5r.png',
        link: 'https://conntext.herokuapp.com'
      },
      {
        title: "QSmart",
        description: "A React front-end, Rails back-end queue management application, completed with David Tomczyk and Joe Teichman. Uses Action Cable to facilitate instant rendering of line, position in line, and total users in line information. Uses Twilio API to notify users by SMS when it is their turn.",
        img_url: 'http://i.imgur.com/MubF8Tb.png',
        link: 'https://qsmart-react.herokuapp.com'
      },
      {
        title: "Pixel PlayGround",
        description: "A JavaScript clone of reddit's /r/place, completed with Sarah Evans and Charles Wooley. Uses Action Cable to facilitate instant updates to the canvas across user sessions.",
        img_url: 'http://i.imgur.com/UUo9URs.png',
        link: 'https://pixel-playground.herokuapp.com'
      }
    ]
  }

  render() {
    return (
      <Container id='ProjectsContainer'>
        <br/><br/>
        <Header size='medium'>Projects</Header><br />
        <Card.Group itemsPerRow={3} doubling>
          {this.state.projects.map( (project, id) => {
            return <Project passedProject={project} key={id} />
          })}
        </Card.Group>
      </Container>
    )
  }
}

export default ProjectsContainer
