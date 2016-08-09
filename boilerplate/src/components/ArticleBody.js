import React, { Component } from 'react';

export default class ArticleBody extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
