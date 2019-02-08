import React, { Component } from 'react';
import Generator from './Generator/Generator'
// import BasicComponent from './BasicComponent/BasicComponent'
// import StateComponent from './StateComponent/StateComponent';
import './App.css';


class App extends Component {
  render() {


    return (
      <div className="App">
        <h1>El Rando the random password generator</h1>
                <Generator/>
                {/* <BasicComponent/>
                <StateComponent/> */}
 
                
      </div>
    );
  }
}

export default App;
