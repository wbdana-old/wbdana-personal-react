import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Project = (props) => {
  return(
    <Card className='project'>
      <a href={props.passedProject.link} target='_blank' rel="noopener noreferrer"><Image src={props.passedProject.img_url} /></a>
      <Card.Content>
        <Card.Header>
          <Icon name='wrench' /><a href={props.passedProject.link} target='_blank' rel="noopener noreferrer">{props.passedProject.title}</a>
        </Card.Header>
        <Card.Description>
          {props.passedProject.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Project
