import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello, world!</h1>
        <p>Here's our Redux state!</p>
        <pre>
          {JSON.stringify(this.props.state, null, 2)}
        </pre>
      </div>
    );
  }
}
