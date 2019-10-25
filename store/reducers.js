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
    default:
      return state;
  }
};

export default reducer;
