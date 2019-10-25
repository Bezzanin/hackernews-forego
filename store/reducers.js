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
    case actions.SORT_BY_SCORE_DEFAULT:
      return {
        ...state,
        newsFeed: state.newsFeed
      };
    case actions.SORT_BY_SCORE_DES:
      console.log(
        state.newsFeed.map(news => {
          return news.score;
        })
      );
      return {
        ...state,
        newsFeed: state.newsFeed.slice().sort((a, b) => {
          return b.score - a.score;
        })
      };
    case actions.SORT_BY_SCORE_ASC:
      console.log(
        state.newsFeed.map(news => {
          return news.score;
        })
      );
      return {
        ...state,
        newsFeed: state.newsFeed.slice().sort((a, b) => {
          return a.score - b.score;
        })
      };
    default:
      return state;
  }
};

export default reducer;
