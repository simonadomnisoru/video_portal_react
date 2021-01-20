import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  conectWithServerTest() {
    axios.get('/videos')
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  }
  
  render() {
    this.conectWithServerTest();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
