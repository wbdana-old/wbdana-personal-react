import React from 'react'
import { Container, Header } from 'semantic-ui-react';

class BlogContainer extends React.Component {
  state =  {
    posts: []
  }

  getBlogPosts = () => {
    // Fetch blog posts from medium here
  }

  render() {
    return(
      <Container className='blogposts'>
        <Header size='medium'>Blog posts coming soon!</Header>
      </Container>
    )
  }
}

export default BlogContainer
