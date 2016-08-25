import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createNewStudent } from 'reducer';

@withRouter
@connect(
  (state, ownProps) => ({
    isLoading: state.loading,
  }),
  (dispatch, ownProps) => ({
    onCreateStudent: async newStudent => {
      await dispatch(createNewStudent(newStudent));
      ownProps.router.push('/students');
    },
  }),
)
export default class NewStudent extends Component {
  render() {
    const loadingClass = this.props.isLoading ? ' fa-spin' : '';

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

          <button className='btn btn-primary' type='submit'>
            Create Student <i className={'fa fa-paper-plane' + loadingClass}/>
          </button>
        </form>
      </div>
    );
  }
}
