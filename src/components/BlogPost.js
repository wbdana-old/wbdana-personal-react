import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const BlogPost = (props) => {
  return(
    <Container className='post'>
      <Header size='small'><a href={props.post.link} target='_blank' rel="noopener noreferrer">{props.post.title}</a></Header><br/>
      {props.post.pubDate.split(" ")[0]}<br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  )
}

export default BlogPost
