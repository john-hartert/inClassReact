import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Squirrel extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

// For templating use npm install -g create-react-app node module.
// Then create-react-app squirrel-squirrel.
// Then code squirrel-squirrel.
// Extends component brings react into the squirrel class. For one class extend one thing,
// since it's a react component that one class is Component.
