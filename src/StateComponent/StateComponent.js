import React, { Component } from 'react';


class StateComponent extends Component {

  state = {
    name: 'Haans Strudel',
    age: '35',
    phrase: 'I love strudel'

  }


  render() {
    return (
      <div>

        <p>Hello my name is {this.state.name} and I'm {this.state.age} years old! </p>

        <p>{this.state.character}</p>

      </div>

    )
  }

}

export default StateComponent;