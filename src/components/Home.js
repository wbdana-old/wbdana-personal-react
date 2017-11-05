import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Home = () => {
  return(
    <Container className='home'>
      <br/><br/>
      <Header size='medium'>Welcome</Header>

      <Container text>
        <p>I'm a former financial restructuring legal assistant turned web developer, and you've landed on my personal homepage. Check out some of my projects here -- I'm always working on new stuff!</p>
      </Container>

    </Container>
  )
}

export default Home
