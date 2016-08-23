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

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(students), 750);
  });

  return promise;
}

export function getStudents() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(JSON.parse(localStorage.getItem('_students')) || []), 750);
  });

  return promise;
}
