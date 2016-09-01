import {
  newStudent as apiCreateNewStudent,
  getStudents as apiGetStudents,
  deleteStudent as apiDeleteStudent,
} from '../api';

export const NEW_STUDENT_FETCH   = 'myApp/NEW_STUDENT_FETCH';
const NEW_STUDENT_SUCCESS = 'myApp/NEW_STUDENT_SUCCESS';
const NEW_STUDENT_FAILURE = 'myApp/NEW_STUDENT_FAILURE';
const NEW_STUDENT_ALWAYS = 'myApp/NEW_STUDENT_ALWAYS';

const GET_STUDENTS_FETCH   = 'myApp/GET_STUDENTS_FETCH';
const GET_STUDENTS_SUCCESS = 'myApp/GET_STUDENTS_SUCCESS';
const GET_STUDENTS_FAILURE = 'myApp/GET_STUDENTS_FAILURE';
const GET_STUDENTS_ALWAYS = 'myApp/GET_STUDENTS_ALWAYS';

const DELETE_STUDENT_FETCH   = 'myApp/DELETE_STUDENT_FETCH';
const DELETE_STUDENT_SUCCESS = 'myApp/DELETE_STUDENT_SUCCESS';
const DELETE_STUDENT_FAILURE = 'myApp/DELETE_STUDENT_FAILURE';
const DELETE_STUDENT_ALWAYS = 'myApp/GET_STUDENTS_ALWAYS';

const initialState = {
  students: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case NEW_STUDENT_FETCH:
    case DELETE_STUDENT_FETCH:
    case GET_STUDENTS_FETCH:
      return {
        ...state,
        loading: true,
      };

    case NEW_STUDENT_SUCCESS:
    case DELETE_STUDENT_SUCCESS:
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
      };

    case NEW_STUDENT_FAILURE:
    case DELETE_STUDENT_FAILURE:
    case GET_STUDENTS_FAILURE:
      console.error('We got an error! OMG', action.error);
      return state;

    case NEW_STUDENT_ALWAYS:
    case DELETE_STUDENT_ALWAYS:
    case GET_STUDENTS_ALWAYS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const createNewStudent = newStudent => async (dispatch, getState) => {
  dispatch({
    type: NEW_STUDENT_FETCH,
  });

  try {
    const createdStudent = await apiCreateNewStudent(newStudent);

    dispatch({
      type: NEW_STUDENT_SUCCESS,
      payload: createdStudent,
    });
  } catch (e) {

    dispatch({
      type: NEW_STUDENT_FAILURE,
      error: e,
    });
  }

  dispatch({
    type: NEW_STUDENT_ALWAYS,
  });
};

export const deleteStudent = studentId => async (dispatch, getState) => {

  dispatch({
    type: DELETE_STUDENT_FETCH,
  });

  try {
    const students = await apiDeleteStudent(studentId);

    dispatch({
      type: DELETE_STUDENT_SUCCESS,
      payload: students,
    });
  } catch (e) {

    dispatch({
      type: DELETE_STUDENT_FAILURE,
      error: e,
    });
  }

  dispatch({
    type: DELETE_STUDENT_ALWAYS,
  });
};

export const getStudents = () => async (dispatch, getState) => {
  dispatch({
    type: GET_STUDENTS_FETCH,
  });

  try {
    const students = await apiGetStudents();

    dispatch({
      type: GET_STUDENTS_SUCCESS,
      payload: students,
    });
  } catch (e) {

    dispatch({
      type: GET_STUDENTS_FAILURE,
      error: e,
    });
  }

  dispatch({
    type: GET_STUDENTS_ALWAYS,
  });
};
