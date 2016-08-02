import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Counter />
        <Counter by={2} />
        <Counter by={3} />
        <Counter by={4} />
      </div>
    );
  }
}

class Counter extends Component {
  static propTypes = {
    by: React.PropTypes.number
  };

  static defaultProps = {
    by: 1,
  };

  state = {
    count: 1,
  };

  onClick(e) {
    this.setState({
      count: this.state.count + this.props.by,
    });
  }

  render() {
    return (
      <div>
        <input type='number' value={this.state.count} readOnly />
        <button onClick={this.onClick.bind(this)}>Increment by {this.props.by}</button>
      </div>
    );
  }
}
