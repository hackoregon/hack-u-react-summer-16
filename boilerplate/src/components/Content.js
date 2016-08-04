import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div style={{
        border: '1px solid #333',
        padding: 10,
        borderRadius: 10,
        margin: '5px 0',
      }}>
        {this.props.children}
      </div>
    );
  }
}
