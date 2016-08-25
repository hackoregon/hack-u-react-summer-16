import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import { getStudents } from 'reducer';

@withRouter
@connect(state => ({
  isLoading: state.loading,
}))
export default class App extends Component {
  getLinkClass(path) {
    return this.props.router.isActive(path, true) ? 'active' : '';
  }

  componentWillMount() {
    this.props.dispatch(getStudents());
  }

  render() {
    return (
      <div>

        {/* Navbar */}
        <nav className='nav navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>Home</Link>
            </div>

            <ul className='nav navbar-nav'>
              <li className={this.getLinkClass('/students')}>
                <Link to='/students'>Student List</Link>
              </li>
              <li className={this.getLinkClass('/students/new')}>
                <Link to='/students/new'>New Student</Link>
              </li>
            </ul>
          </div>
        </nav>

      {/* Main App */}
        <div className='container'>
          <div style={{}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
