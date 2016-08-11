import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from './Header';
import { setArticles } from '../reducer';

@connect()
export default class App extends Component {

  async componentDidMount() {
    setInterval(async () => {
      const fetched = await fetch('http://bloggy.2dot3.com/posts');
      const articles = await fetched.json();
      this.props.dispatch(setArticles(articles));
    }, 1500);
  }

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
