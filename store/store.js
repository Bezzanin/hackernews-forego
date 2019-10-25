import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  defaultReducer: reducers
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
