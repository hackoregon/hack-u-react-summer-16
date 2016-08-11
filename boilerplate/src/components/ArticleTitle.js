import React, { Component } from 'react';

export default class ArticleTitle extends Component {
  render() {
    return (
      <h2>{this.props.children}</h2>
    );
  }
}
