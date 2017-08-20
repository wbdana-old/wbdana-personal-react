import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Project from './Project'

class ProjectsContainer extends React.Component {
  state = {
    projects: [
      {
        title: "Pixel PlayGround",
        description: "A JavaScript clone of reddit's /r/place, completed with Sarah Evans and Charles Wooley.",
        img_url: 'http://i.imgur.com/UUo9URs.png',
        link: 'https://pixel-playground.herokuapp.com'
      },
      {
        title: "Testing",
        description: "More testing!",
        img_url: ''
      }
    ]
  }

  render() {
    return (
      <Container className='ProjectsContainer'>
        <br/><br/>
        <Header size='medium'>Projects</Header>
        {this.state.projects.map( project => {
          return <Project passedProject={project} />
        })}
      </Container>
    )
  }
}

export default ProjectsContainer
