import React from 'react';
import { connect } from 'react-redux';

import { someAction } from '../reducer';

const styles = require('./About.css');

@connect(
  state => ({
    reduxState: state,
  }),
)
export default class About extends React.Component {
  render() {
    return (
      <div>
        <h4 className={styles.bob}>About Page! {this.props.title}</h4>
        <div>
          <button onClick={e => this.props.dispatch(someAction(10))}>
            Click me!
          </button>

          <div>
            Redux state:
          </div>
          <pre className={'banana'}>
            {JSON.stringify(this.props.reduxState, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}
