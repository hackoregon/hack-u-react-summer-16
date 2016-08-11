import React from 'react';
import { connect } from 'react-redux';

import { someAction } from '../reducer';

@connect(
  state => ({
    reduxState: state,
  }),
)
export default class About extends React.Component {
  render() {
    return (
      <div>
        <h4>About Page! {this.props.title}</h4>
        <div>
          <button onClick={e => this.props.dispatch(someAction(10))}>
            Click me!
          </button>

          <div>
            Redux state:
          </div>
          <pre>
            {JSON.stringify(this.props.reduxState, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}
