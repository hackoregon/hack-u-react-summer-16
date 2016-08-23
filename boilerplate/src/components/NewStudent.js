import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewStudent } from 'reducer';

@connect(
  state => ({}),
  dispatch => ({
    onCreateStudent: newStudent => {
      dispatch(createNewStudent(newStudent));
    },
  }),
)
export default class NewStudent extends Component {
  render() {
    return (
      <div>
        <h1>New Student</h1>

        <form onSubmit={e => {
          e.preventDefault();
          this.props.onCreateStudent({ name: this.refs.name.value });
        }}>

          <div className='form-group'>
            <input
              ref='name'
              className='form-control'
              type='text'
              placeholder='Student Name' />
          </div>

          <button className='btn btn-primary' type='submit'>Create Student</button>
        </form>
      </div>
    );
  }
}
