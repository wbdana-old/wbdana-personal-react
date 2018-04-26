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
        <p>My name is Will Dana and I'm a freelance full-stack web developer based in Brooklyn, NY. My oversized lapdog is named <a href='https://en.wikipedia.org/wiki/HMS_Indefatigable_(1784)' target='_blank' rel="noopener noreferrer">Indy</a> (check out his <a href='https://www.instagram.com/the_indefatigable_indy/?hl=en' target='_blank' rel="noopener noreferrer">Instagram</a>!), and he's a freelance gourmand also based in Brooklyn, NY. Check out some of my projects here -- I'm always working on new stuff!</p>
      </Container>

    </Container>
  )
}

export default Home
