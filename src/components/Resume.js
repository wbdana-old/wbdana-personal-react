import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Resume = () => {
  return(
    <Container className='resume'>
      <br/><br/>
      <Header size='medium'>Resume</Header>
      <iframe title='resume' src="https://drive.google.com/file/d/0B8MJNqPHxi3jeGRteEVHX2Z6ZVE/preview" width="850" height="1100"></iframe>
    </Container>
  )
}

export default Resume
