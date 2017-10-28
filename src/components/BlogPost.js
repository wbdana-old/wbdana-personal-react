import React from 'react'
import { Icon, Card, Header } from 'semantic-ui-react'

const BlogPost = (props) => {
  return(
      <Card fluid className='post'>
        <Card.Header>
          <a href={props.post.link} target='_blank' rel="noopener noreferrer">
            <Header size='medium'>
              <Icon name='write' size='mini' /> {props.post.title}</Header>
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
