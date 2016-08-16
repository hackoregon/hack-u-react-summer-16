const SOME_ACTION = 'SOME_ACTION';
const NEW_ARTICLE = 'NEW_ARTICLE';
const SET_ARTICLES = 'SET_ARTICLES';
const BEGIN_LOADING = 'BEGIN_LOADING';
const END_LOADING = 'END_LOADING';

const initialState = {
  foo: 'Hello from Redux!!!',
  isLoading: false,
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

export function startPolling() {
  return function(dispatch, getState) {
    setInterval(async () => {

      dispatch(beginLoading());

      const fetched = await fetch('http://bloggy.2dot3.com/posts');
      const articles = await fetched.json();

      dispatch(endLoading());

      dispatch(setArticles(articles));
    }, 1500);
  };
}
