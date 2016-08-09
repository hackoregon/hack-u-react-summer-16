import React, { Component } from 'react';

export default class Posts extends Component {
  render() {
    return (
      <div>Here is where we render Post #{this.props.params.id}</div>
    );
  }
}
