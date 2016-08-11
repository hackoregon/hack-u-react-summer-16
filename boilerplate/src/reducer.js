const SOME_ACTION = 'SOME_ACTION';
const NEW_ARTICLE = 'NEW_ARTICLE';
const SET_ARTICLES = 'SET_ARTICLES';

const initialState = {
  foo: 'Hello from Redux!!!',
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
