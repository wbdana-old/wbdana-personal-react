import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Resume = () => {
  return(
    <Container className='resume'>
      <br/><br/>
      <Header size='medium'> </Header>
      <div id="ResumeDiv">
        <iframe id="ResumeiFrame" src="https://docs.google.com/presentation/d/e/2PACX-1vTOxyaHzp1NsRn6VhNhWY3KkrlG5Rjq6oztGmTH2QG8THeb9OsVzVFaBpDiyaVjB3pB4kfqJoMH5E0d/embed?start=false&loop=false&delayms=60000" frameborder="0" width="1224" height="1613" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <br/>
    </Container>
  )
}

export default Resume
