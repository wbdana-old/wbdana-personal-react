import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Home = () => {
  return(
    <Container className='home'>
      <Header size='medium'>Welcome to my site!</Header>
      <p>Thanks for visiting. Here, you can find all sorts of fun stuff, like my bio, contact info, resume, and way too much more.</p>
    </Container>
  )
}

export default Home
