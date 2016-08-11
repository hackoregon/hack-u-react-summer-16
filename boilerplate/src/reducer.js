const SOME_ACTION = 'SOME_ACTION';

const initialState = {
  foo: 'Hello from Redux!!!',
};

export default function reducer(state = initialState, action) {
  // Respond to actions here
  switch (action.type) {
    case SOME_ACTION:
      return {
        ...state,
        foo: state.foo + action.payload,
      };

    default:
      return state;
  }
}

export function someAction(count) {
  return {
    type: SOME_ACTION,
    payload: count || 3,
  };
}
