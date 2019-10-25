export const actions = {
  GET_NEWSIDS_SUCCESS: "GET_NEWSIDS_SUCCESS",
  GET_NEWSIDS_FAILURE: "GET_NEWSIDS_FAILURE",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
  SORT_FILTER_DEFAULT: "SORT_FILTER_DEFAULT",
  SORT_BY_SCORE_ASC: "SORT_BY_SCORE_ASC",
  SORT_BY_SCORE_DES: "SORT_BY_SCORE_DES",
  FILTER_BY_SCORE: "FILTER_BY_SCORE"
};

import { getNewsIDs, getUserById } from "../utils/hackerNewsApi";
import { max } from "moment";

export const getNews = () => {
  return (dispatch, getState) => {
    getNewsIDs()
      .then(news => {
        Promise.all(news).then(values => {
          return dispatch({
            type: actions.GET_NEWSIDS_SUCCESS,
            payload: values
          });
        });
      })
      .catch(e => {
        return dispatch({
          type: actions.GET_NEWSIDS_FAILURE,
          payload: e.message
        });
      });
  };
};

export const getUser = userId => {
  return (dispatch, getState) => {
    getUserById(userId)
      .then(user => {
        return dispatch({
          type: actions.GET_USER_SUCCESS,
          payload: user
        });
      })
      .catch(e => {
        return dispatch({
          type: actions.GET_USER_FAILURE,
          payload: e.message
        });
      });
  };
};

export const sortByScore = order => {
  return (dispatch, getState) => {
    if (order === "des") {
      return dispatch({
        type: actions.SORT_BY_SCORE_DES
      });
    } else if (order === "asc") {
      return dispatch({
        type: actions.SORT_BY_SCORE_ASC
      });
    } else {
      return dispatch({
        type: actions.SORT_FILTER_DEFAULT
      });
    }
  };
};

export const filterByScore = (minScore, maxScore) => {
  return (dispatch, getState) => {
    return dispatch({
      type: actions.FILTER_BY_SCORE,
      payload: [minScore, maxScore]
    });
  };
};
