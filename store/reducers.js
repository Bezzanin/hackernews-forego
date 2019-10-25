import { actions } from "./actions";

const initialState = {
  newsFeed: [],
  currentUser: [],
  errorMessage: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_NEWSIDS_SUCCESS:
      return {
        ...state,
        newsFeed: action.payload
      };
    case actions.GET_NEWSIDS_FAILURE:
      return {
        ...state,
        newsFeed: [],
        errorMessage: action.payload
      };
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case actions.GET_USER_FAILURE:
      return {
        ...state,
        currentUser: [],
        errorMessage: action.payload
      };
    case actions.SORT_FILTER_DEFAULT:
      return {
        ...state,
        newsFeed: state.newsFeed
      };
    case actions.SORT_BY_SCORE_DES:
      return {
        ...state,
        newsFeed: state.newsFeed.slice().sort((a, b) => {
          return b.score - a.score;
        })
      };
    case actions.SORT_BY_SCORE_ASC:
      return {
        ...state,
        newsFeed: state.newsFeed.slice().sort((a, b) => {
          return a.score - b.score;
        })
      };
    case actions.FILTER_BY_SCORE:
      return {
        ...state,
        newsFeed: state.newsFeed.slice().filter(news => {
          return (
            news.score > action.payload[0] && news.score < action.payload[1]
          );
        })
      };
    default:
      return state;
  }
};

export default reducer;
