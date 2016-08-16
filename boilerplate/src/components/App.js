import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from './Header';
import { startPolling, togglePolling } from '../reducer';

@connect(state => ({
  isLoading: state.isLoading,
  isPolling: state.shouldPoll,
}))
export default class App extends Component {

  async componentDidMount() {
    this.props.dispatch(startPolling());
  }

  render() {

    const myTitle = 'Yippie!';

    return (
      <div className='container'>
        <Header>
          <h1>My Cool Blog</h1>

          {this.props.isLoading
            ? <div>I AM LOADING!</div>
            : <div>Not Loading</div>
          }

          <hr/>
          <h3>
            <Link to='/home'>Home</Link>
            <span> • </span>
            <Link to='/about'>About</Link>
          </h3>
          <hr/>
        </Header>

        {React.cloneElement(this.props.children, { title: myTitle })}

        <hr/>

          <button onClick={() => this.props.dispatch(togglePolling()) }>
            {this.props.isPolling === true
              ? 'Disable'
              : 'Enable'
            } polling
          </button>
      </div>
    );
  }
}
