import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  (state, ownProps) => {
    const student =
        state.students.find(student => student.id === ownProps.params.id)
        || { name: 'Unknown student' };

    return ({
      theStudent: student,
    });
  }
)
export default class StudentEdit extends Component {
  render() {
    return (
      <h1>Welcome to StudentEdit {this.props.theStudent.name}</h1>
    );
  }
}
