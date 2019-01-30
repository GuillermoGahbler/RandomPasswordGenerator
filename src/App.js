import React, { Component } from 'react';
import Generator from './Generator/Generator'
import './App.css';

class App extends Component {
  render() {


    return (
      <div className="App">
        <h1>El Rando the random password generator</h1>
                <Generator/>
      </div>
    );
  }
}

export default App;
