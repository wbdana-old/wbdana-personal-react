import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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

  render() {
    return (
      <Router>
        <div className="App">

            <NavBar activeItem={this.state.activePage} />

            <Route path="/" render={()=>(
              <Redirect to="home" />
            )} />

            <Route path="/home" render={()=>(
              <Home />
            )} />

            <Route path="/bio" render={()=>(
              <Bio />
            )} />

            <Route path="/resume" render={()=>(
              <Resume />
            )} />

            <Route path="/blog" render={()=>(
              <BlogContainer />
            )} />

            <Route path="/contact" render={()=>(
              <Contact />
            )} />

            <Route path="/projects" render={()=>(
              <ProjectsContainer />
            )} />

        </div>
      </Router>
    );
  }
}

export default App;
