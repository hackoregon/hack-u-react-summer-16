const SOME_ACTION = 'SOME_ACTION';
const NEW_ARTICLE = 'NEW_ARTICLE';
const SET_ARTICLES = 'SET_ARTICLES';
const BEGIN_LOADING = 'BEGIN_LOADING';
const END_LOADING = 'END_LOADING';
const EDIT_ARTICLE = 'EDIT_ARTICLE';
const SHOULD_POLL = 'SHOULD_POLL';

const initialState = {
  foo: 'Hello from Redux!!!',
  isLoading: false,
  shouldPoll: true,
  articles: [],
};

export default function reducer(state = initialState, action) {
  // Respond to actions here
  switch (action.type) {
    case SOME_ACTION:
      return {
        ...state,
        foo: state.foo + action.payload,
      };

    case NEW_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };

    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };

    case BEGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case SHOULD_POLL:
      return {
        ...state,
        shouldPoll: action.payload,
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

export function newArticleAction(newArticle) {
  return {
    type: NEW_ARTICLE,
    payload: newArticle,
  };
}

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    payload: articles,
  };
}

export function createArticleAction(newArticle) {
  return (dispatch, getState) => {
    const data = JSON.stringify(newArticle);

    fetch('http://bloggy.2dot3.com/posts/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    });

    dispatch(newArticleAction(newArticle));
  };
}

function beginLoading() {
  return {
    type: BEGIN_LOADING,
  };
}

function endLoading() {
  return {
    type: END_LOADING,
  };
}

export function editArticle(editedArticle) {
  return async (dispatch, getState) => {
    const data = JSON.stringify(editedArticle);
    await fetch(`http://bloggy.2dot3.com/posts/${editedArticle.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    });
  };
}

function _shouldPoll(val) {
  return {
    type: SHOULD_POLL,
    payload: val,
  };
}

export function togglePolling() {
  return (dispatch, getState) => dispatch(_shouldPoll(!getState().shouldPoll));
}

let _id = null;
export function startPolling() {
  return function(dispatch, getState) {
    clearInterval(_id);
    _id = setInterval(async () => {
      if (!getState().shouldPoll) {
        return;
      }

      dispatch(beginLoading());

      const fetched = await fetch('http://bloggy.2dot3.com/posts');
      const articles = await fetched.json();

      dispatch(endLoading());

      dispatch(setArticles(articles));
    }, 1500);
  };
}
