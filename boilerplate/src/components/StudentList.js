import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(
  state => ({
    students: state.students,
  })
)
export default class StudentList extends Component {
  render() {
    return (
      <div>
        <h1>Student List</h1>

        {this.props.students.map(student => {
          return (
            <Link
              style={{
                display: 'inline-block',
                margin: '0 3px',
              }}
              className='label label-primary'
              to={`/students/${student.id}`}
              key={student.id}>
                {student.name}
            </Link>
          );
        })}
      </div>
    );
  }
}
