import React from 'react';
import indy from '../assets/will-indy.jpg';
import { Container, Header, Image, Card } from 'semantic-ui-react';

const Home = () => {
  return(
    <Container className='home'>
      <br/><br/>
      {/* <Header size='medium'>Welcome</Header> */}

      <Container text>
        <br />
        <Image src={indy} size="medium" centered rounded/>
        <br /><br />
        <p>My name is Will Dana, and I'm a freelance developer based in Brooklyn, NY. Check out some of my projects here -- I'm always working on new stuff!</p>
      </Container>

    </Container>
  )
}

export default Home
