import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ColorChanger colors={['red', 'orange', 'silver']}/>
        <ColorChanger/>
        <ColorChanger/>
        <ColorChanger/>
      </div>
    );
  }
}

class ColorChanger extends Component {
  state = {
    colorIdx: 0,
  };

  static defaultProps = {
    colors: [
      'green',
      'blue',
      'pink',
      '#44ff44',
      'orange',
    ],
  }

  render() {
    const colorStyle = {
      backgroundColor: this.props.colors[this.state.colorIdx],
      width: 50,
      height: 50,
    };

    return (
      <div className='container'>
        <div style={colorStyle}>
        </div>
        <button onClick={e => {
          this.setState({
            colorIdx: (this.state.colorIdx + 1) % this.props.colors.length,
          });
        }}>
          Change Color
        </button>
      </div>
    );
  }
}
