import React from 'react'
import { Card, Header } from 'semantic-ui-react'

const BlogPost = (props) => {
  return(
    <Card className='post'>
      <Card.Header>
        <a href={props.post.link} target='_blank' rel="noopener noreferrer">
          {props.post.title}
        </a>
        <br/>
        {props.post.description.replace(/(<([^>]+)>)/ig, "").split("\n")[1]}
      </Card.Header>
      <Card.Content>
        Published: {props.post.pubDate.split(" ")[0]}
      </Card.Content>
    </Card>
  )
}

export default BlogPost
