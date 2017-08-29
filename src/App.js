import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Need to import your other JS files.
import Readout from './readout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Readout temperature={1000000} unit="f" />
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
// // Main stuff you care about is in the src folder.
// Always need to import React at the top.
// All code should be living in the source directory.
// Import is another way of saying require with Node.
// ONE COMPONENT PER FILE!!!!! Create new folders for new components.
// Better to use functional components than class components when starting out.


// Example:
// Function Cat(){}
// Function Oakley(){}
// Oakley.prototype = new Cat();

// Same as:
// class Cat {}

// class Oakley extends Cat{}
// export default Squirrel;