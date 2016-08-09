import React, { Component } from 'react';

export default class ArticleTitle extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
