import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const Contact = () => {
  return(
    <Container className='contact'>
    <br/><br/>
      <Header size='medium'>Contact</Header>
        <p>Email: <a href="mailto:admin@wbdana.com">william.b.dana@gmail.com</a></p>
        <p text-align="center">New York City</p>
    </Container>
  )
}

export default Contact
