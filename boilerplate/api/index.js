import uuid from 'node-uuid';

export async function addEntry(studentId, entry) {
  const students = await getStudents();
  const student = students.find(student => student.id === studentId);
  if (!student) {
    throw new Error('Student ID not found');
  }

  student.entries = student.entries || [];
  student.entries = [
    ...student.entries,
    entry
  ];

  localStorage.setItem('_students', JSON.stringify(students));

  return students;
}

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
  student.entries = [];

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
