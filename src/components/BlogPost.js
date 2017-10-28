import React from 'react'
import { Card, Header } from 'semantic-ui-react'

const BlogPost = (props) => {
  return(
      <Card fluid className='post'>
        <Card.Header>
          <a href={props.post.link} target='_blank' rel="noopener noreferrer">
            <Header size='small'>{props.post.title}</Header>
          </a>
        </Card.Header>
        <Card.Content>
          <a href={props.post.link} target='_blank' rel="noopener noreferrer">
            {props.post.description.replace(/(<([^>]+)>)/ig, "").split("\n")[1]}<br/>
            Published: {props.post.pubDate.split(" ")[0]}
          </a>
        </Card.Content>
      </Card>
  )
}

export default BlogPost
