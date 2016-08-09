import React, { Component } from 'react';

import { Link } from 'react-router';

import Header from './Header';

export default class App extends Component {
  render() {

    const myTitle = 'Yippie!';

    return (
      <div className='container'>
        <Header>
          <h1>My Cool Blog</h1>
          <hr/>
          <h3>
            <Link to='/home'>Home</Link>
            <span> • </span>
            <Link to='/about'>About</Link>
          </h3>
          <hr/>
        </Header>

        {React.cloneElement(this.props.children, { title: myTitle })}

      </div>
    );
  }
}
