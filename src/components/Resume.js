import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Resume extends React.Component {
  state = {
    loaded: false
  }

  onDocumentLoad = () => {
    this.setState({
      loaded: true
    })
  }

  render() {
    return(
      <Container className='resume'>
        <br/><br/>
        <Header size='medium'> </Header>
        <div id="ResumeDiv">
          <iframe id="ResumeiFrame" title="ResumeiFrame" src="https://docs.google.com/presentation/d/e/2PACX-1vTOxyaHzp1NsRn6VhNhWY3KkrlG5Rjq6oztGmTH2QG8THeb9OsVzVFaBpDiyaVjB3pB4kfqJoMH5E0d/embed" frameborder="0" width="800" height="1100" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <br/>
      </Container>
    )
  }
}

export default Resume
