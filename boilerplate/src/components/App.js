import React, { Component } from 'react';

export default class App extends Component {
  state = {
    addedValue: '',
    num1: 1,
    num2: 2,
  };

  render() {
    return (
      <div className='container'>
        <input
          onChange={e => {
            this.setState({
              num1: e.target.value
            });
          }}
          ref='num1'
          type='number'
          value={this.state.num1}
        />
        +
        <input
          onChange={e => {
            this.setState({
              num2: e.target.value
            });
          }}
          ref='num2'
          type='number'
          value={this.state.num2} />

        <br/>

        <button onClick={e => {
          this.setState({
            addedValue: this.state.num1 + this.state.num2,
          });

        }}>Add!</button>

        <div>
          Result:
          <input readOnly type='number' value={this.state.addedValue} />
        </div>
      </div>
    );
  }
}
