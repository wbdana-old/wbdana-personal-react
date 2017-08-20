import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'

import Home from './components/Home'
import Bio from './components/Bio'
import Resume from './components/Resume'
import BlogContainer from './components/BlogContainer'
import Contact from './components/Contact'
import ProjectsContainer from './components/ProjectsContainer'

class App extends Component {
  state = {
    activePage: 'home'
  }

  updateActivePage = (newPage) => {
    this.setState({
      activePage: newPage
    })
  }

  renderCorrectPage = () => {
    if (this.state.activePage === 'home') {
      return <Home />
    } else if (this.state.activePage === 'bio') {
      return <Bio />
    } else if (this.state.activePage === 'resume') {
      return <Resume />
    } else if (this.state.activePage === 'blog') {
      return <BlogContainer />
    } else if (this.state.activePage === 'contact') {
      return <Contact />
    } else if (this.state.activePage === 'projects') {
      return <ProjectsContainer />
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar activeItem={this.state.activePage} updateActivePage={this.updateActivePage} />
        {this.renderCorrectPage()}
      </div>
    );
  }
}

export default App;
