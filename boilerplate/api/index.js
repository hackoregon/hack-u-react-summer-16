import uuid from 'node-uuid';

export function newStudent(student) {
  let students;
  try {
    students = JSON.parse(localStorage.getItem('_students')) || [];
  } catch (e) {
    students = [];
  }

  if (typeof students !== 'object') {
    students = [];
  }

  student.id = uuid.v1();

  students = [
    ...students,
    student,
  ];

  localStorage.setItem('_students', JSON.stringify(students));

  return Promise.resolve(students);
}

export function getStudents() {
  return Promise.resolve(JSON.parse(localStorage.getItem('_students')) || []);
}
