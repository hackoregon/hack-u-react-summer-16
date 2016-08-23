import { newStudent as apiCreateNewStudent } from '../api';

const NEW_STUDENT_FETCH   = 'myApp/NEW_STUDENT_FETCH';
const NEW_STUDENT_SUCCESS = 'myApp/NEW_STUDENT_SUCCESS';
const NEW_STUDENT_FAILURE = 'myApp/NEW_STUDENT_FAILURE';
const NEW_STUDENT_ALWAYS = 'myApp/NEW_STUDENT_ALWAYS';

const initialState = {
  students: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case NEW_STUDENT_FETCH:
      return {
        ...state,
        loading: true,
      };

    case NEW_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.payload,
      };

    case NEW_STUDENT_FAILURE:
      console.error('We got an error! OMG', action.error);
      return state;

    case NEW_STUDENT_ALWAYS:
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
