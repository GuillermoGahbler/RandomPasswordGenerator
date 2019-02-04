import React, { Component } from 'react';

class Generator extends Component {


  state = {
    values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')'],
    letterPick: "",
    passwordLength: '8',
  }

  createRandomPassword = () => {
    const randomlyGetValue = (anything) => {
      return anything[Math.floor(Math.random() * anything.length)]
    }

    let newPasswordArray = [];


    for (let i = 0; i < this.state.passwordLength; i++) {
      newPasswordArray.push(randomlyGetValue(this.state.values))
    }

    return newPasswordArray.join('')
  }



  handleRandomAlphabet = () => {
    const randomLetter = this.createRandomPassword();
    this.setState({
      letterPick: randomLetter
    })
  }


  render() {
    return (
      <div>
        <p>Click the button to generate a random 8 character password: {this.state.letterPick}</p>
        <button onClick={this.handleRandomAlphabet}>Button </button>
      </div>
    )
  }
}

export default Generator;