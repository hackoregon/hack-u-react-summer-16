import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(state => ({
  isLoading: state.loading,
}))
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>Loading: {this.props.isLoading ? 'Yes' : 'No'}</div>
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
          <Link to='students/new'>New Student</Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}
