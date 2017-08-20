import React from 'react'
import BlogPost from './BlogPost'
import { Container, Header } from 'semantic-ui-react';

class BlogContainer extends React.Component {
  state =  {
    posts: []
  }

  getBlogPosts = () => {
    // Fetch blog posts from medium here
    const opts = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40william.b.dana', opts)
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
        <Header size='medium'>View my blog on <a href='https://medium.com/@william.b.dana' target='_blank' rel="noopener noreferrer">Medium.com</a></Header><br/><br/>
        {this.state.posts.map( post => {
          if (!post.title.includes("For sure! Let me know")) {
            return <BlogPost post={post} />
          }})}
      </Container>
    )
  }
}

export default BlogContainer
