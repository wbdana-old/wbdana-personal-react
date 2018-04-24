import React from 'react'
import BlogPost from './BlogPost'
import { Container, Header, Card } from 'semantic-ui-react';

class BlogContainer extends React.Component {
  state =  {
    posts: []
  }

  getBlogPosts = () => {
    // Fetch blog posts from Medium here
    const opts = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40wbdana', opts)
      .then(resp => resp.json())
      .then(data => this.setState({
        posts: [...data.items]
      }))
  }

  componentDidMount() {
    this.getBlogPosts()
  }

  render() {
    return(
      <Container className='blogposts'>

        <br/><br/>

        <Header size='medium'>Blog Posts</Header><br/>

        <Card.Group itemsPerRow={2}>
          {this.state.posts.map( (post, id) => {
              return <BlogPost post={post} key={id} />
          })}
        </Card.Group>

        <Container text>
          <p>View my blog on <a href='https://medium.com/@wbdana' target='_blank' rel="noopener noreferrer">Medium.com</a></p>
        </Container>

      </Container>
    )
  }
}

export default BlogContainer
