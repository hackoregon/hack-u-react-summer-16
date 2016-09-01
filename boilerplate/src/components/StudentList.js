import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { deleteStudent } from 'reducer';

@connect(
  state => ({
    students: state.students,
  }),
  dispatch => ({
    deleteStudent: id => dispatch(deleteStudent(id))
  })
)
export default class StudentList extends Component {
  render() {
    const deleteClick = (studentId, e) => {
      e.preventDefault();
      this.props.deleteStudent(studentId);
    };

    return (
      <div>
        <h1>Student List</h1>

        {this.props.students.map(student => {
          return (
            <Link
              style={{
                display: 'inline-block',
                margin: '3px',
                fontSize: '24px',
                border: '1px solid #777',
                boxShadow: '1px 1px 3px #444',
              }}
              className='label label-primary'
              to={`/students/${student.id}`}
              key={student.id}>
                {student.name}&nbsp;
                <i
                  className='fa fa-times-circle'
                  onClick={deleteClick.bind(this, student.id)} />
            </Link>
          );
        })}
      </div>
    );
  }
}
