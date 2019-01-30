import React, { Component } from 'react';


class Generator extends Component {

  // create an array in the state object
  state = {
    values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')'],
    // create a blank object this will be set as default
    letterPick: ""
  }

  // create a function that will randomly choose a letter from the array in the state.
  handleGenerator = (array) => {
    const rando = Math.floor(Math.random() * array.length);
    const pickFromOneLetterFromArray = array[rando];
    return pickFromOneLetterFromArray;
  }


   

  //new function to select random letter and set the default to blank
  handleRandomAlphabet = () => {
    // this calls the handleGenerator funcction and passes the alphbet array with this->state->alphabet
    const randomLetter = this.handleGenerator(this.state.values)
    this.setState({
      // this by default will display letterPick first and once button pushed it will display randomletter
      letterPick: randomLetter
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRandomAlphabet}>Button </button>
        <p>Random letter generator: {this.state.letterPick}</p>

      </div>
    )
  }
}







export default Generator;