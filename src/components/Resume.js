import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Document } from 'react-pdf/build/entry.noworker'

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
        <Header size='medium'>Resume</Header>
        <Document
          file="../../resume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        />
      </Container>
    )
  }
}

export default Resume
