import React from 'react'
import { Container, Header, Card } from 'semantic-ui-react'
import Project from './Project'

class ProjectsContainer extends React.Component {
  state = {
    projects: [
      {
        title: "Connected Text",
        description: "A",
        img_url: 'https://i.imgur.com/7jG8L5r.png',
        link: 'https://conntext.herokuapp.com'
      },
      {
        title: "QSmart",
        description: "A React front-end, Rails back-end queue management application, completed with David Tomczyk and Joe Teichman. Uses ActionCable to facilitate instant rendering of line, position in line, and total users in line information. Uses Twilio API to notify users by SMS when it is their turn. Note: SMS notifications currently require authorization. Please contact me if you would like to request access.",
        img_url: 'http://i.imgur.com/MubF8Tb.png',
        link: 'https://qsmart-react.herokuapp.com'
      },
      {
        title: "Pixel PlayGround",
        description: "A JavaScript clone of reddit's /r/place, completed with Sarah Evans and Charles Wooley. Uses ActionCable to facilitate instant updates to the canvas across user sessions.",
        img_url: 'http://i.imgur.com/UUo9URs.png',
        link: 'https://pixel-playground.herokuapp.com'
      }
    ]
  }

  render() {
    return (
      <Container className='ProjectsContainer'>
        <br/><br/>
        <Header size='medium'>Projects</Header>
        <Card.Group itemsPerRow={4} >
          {this.state.projects.map( project => {
            return <Project passedProject={project} />
          })}
        </Card.Group>
      </Container>
    )
  }
}

export default ProjectsContainer
