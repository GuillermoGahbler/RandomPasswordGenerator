import React, { Component } from 'react';

class Generator extends Component {

  state = {
    values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')'],
    letterPick: "",
    passwordLength: 0
     
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

  handleChange = (event)=>{
    let usersInput = event.target.value
    /* let usersInputConvertedToLength = usersInput.length;
     or in otherwords*/
    let passwordLength = parseInt(usersInput)
    this.setState({
      passwordLength:passwordLength
    })
  }


  // Render will show all fucntions and state above
  render() {
    return (
      <div>
        
        <form onClick={this.handlePasswordLengthClick}>
          <label> How long do you want your password to be? Enter a number:
          <input type="number" 
          value={this.state.value} 
          onChange={this.handleChange}
           />
           <h5>you can generate or change length as much as you'd like</h5>
          </label>
           
          <p>
          Here's your password: 
        {this.state.letterPick}</p>
        </form>


        <button onClick={this.handleRandomAlphabet}>click to generate </button>
        {/* I'm just throwing this state below to better understand it's useless but useful to me :) */}
        {/* <h4>{this.state.otherState[0].phrase} & <h4>{this.state.otherState[1].otherPhrase}</h4></h4> */}
      </div>
    )
  }
}

export default Generator;