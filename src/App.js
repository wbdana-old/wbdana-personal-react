import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    activePage: 'home'
  }

  render() {
    return (
      <div className="App">
        <NavBar activeItem={this.state.activePage} />
      </div>
    );
  }
}

export default App;
