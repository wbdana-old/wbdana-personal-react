import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Resume from './components/Resume';
import BlogContainer from './components/BlogContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
    showFooter: false,
  };

  showFooter = (event, data) => {
    this.setState({ showFooter: !this.state.showFooter });
  };

  render() {
    return (
      <Router>
        <div className="App">

            <NavBar activeItem={this.state.activePage} />

            <Route exact path="/" render={()=>(
              <Redirect to="home" />
            )} />

            <Route path="/home" render={()=>(
              <Home />
            )} />

            <Route path="/resume" render={()=>(
              <Resume />
            )} />

            <Route path="/blog" render={()=>(
              <BlogContainer />
            )} />

            <Route path="/projects" render={()=>(
              <ProjectsContainer />
            )} />

            <Footer showFooter={this.showFooter} showFooterState={this.state.showFooter} />

        </div>
      </Router>
    );
  }
};

export default App;
