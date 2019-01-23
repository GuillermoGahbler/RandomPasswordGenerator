import React, { Component } from 'react';


class Generator extends Component {

  state = {
    alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    letterPick: ""
  }

  handleGenerator = (array) => {
    const rando = Math.floor(Math.random() * array.length);
    const pickFromOneLetterFromArray = array[rando];
    return pickFromOneLetterFromArray;
  }

  handleRandomAlphabet = () => {
    const randomLetter = this.handleGenerator(this.state.alphabet)
    this.setState({
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