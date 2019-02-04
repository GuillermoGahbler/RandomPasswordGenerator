import React, { Component } from 'react';

class Generator extends Component {

  // create an array in the state object
  state = {
    // values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')'],
    // create a blank object this will be set as default
    letterPick: ""
  }

  // create a function that will randomly choose a letter from the array in the state.
  /*handleGenerator = (array) => {
    const rando = Math.floor(Math.random() * array.length);
    const pickFromOneLetterFromArray = array[rando];
    return pickFromOneLetterFromArray;
  }
  */

  createRandomPassword = ()=>{

  //created a variable for how long the password should be 
 const passwordLength = 8;
 
 //created a variable for the characters that should be used to create the password.
 const passwordChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
 
 
 
 // to use the randomize function below just call and pass the array using the const name
 const randomlyGetValue = (anything) =>{
   return anything[Math.floor(Math.random()*anything.length)]
 }
 
 // created an empty array variable so the it can be used to push a value into it
 let newPasswordArray = [];
 
 //created a for loop that will iterate through how long the password should by passsing the variable for passwordLength through it
 for( let i=0; i<passwordLength; i++){
   //we created an empty array so we can push our value into it. the value is the result of the expression e.g.: randomlyGetValue(passwordChars) is the expression that holds a value.
   newPasswordArray.push(randomlyGetValue(passwordChars))
 }
 
 //returned the value we want and added .join('') to join the array and remove commas
 return newPasswordArray.join('')
   
 }



  //new function to select random letter and set the default to blank
  handleRandomAlphabet = () => {
    // this calls the handleGenerator funcction and passes the alphbet array with this->state->alphabet
    const randomLetter = this.createRandomPassword();
    
    this.setState({
      // this by default will display letterPick first and once button pushed it will display randomletter
      letterPick: randomLetter
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.handleRandomAlphabet}>Button </button>
        <p>Click the button to generate a random 8 character password: {this.state.letterPick}</p>
      </div>
    )
  }
}

export default Generator;