import React, { Component } from 'react';

export default class Author extends Component {
  render() {
    return (
      <div>By: <i>{this.props.children}</i></div>
    );
  }
}
