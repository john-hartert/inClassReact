import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Need to import your other JS files.
import Readout from './readout.js';
import magicbutton from './magicbutton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theNumber: 999
      };
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <p className="App-intro"> */}
          <Readout unit="f" temperature={this.state.theNumber} />
        {/* </p> */}
        <magicbutton 
        title="Press here for fun" 
        handleClick={this._changeNumber}
        />
      </div>
    );
  }
  _changeNumber = () => {
    console.log('I\'m having the time of me life');
    // this.theNumber=this.theNumber * this.theNumber;
    const newNumber = this.state.theNumber * this.state.theNumber;
    this.setState({
      theNumber: newNumber
    });
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
// Click a button and generate a number that squares itself. The app stores the number,
// so 


// Example:
// Function Cat(){}
// Function Oakley(){}
// Oakley.prototype = new Cat();

// Same as:
// class Cat {}

// class Oakley extends Cat{}
// export default Squirrel;