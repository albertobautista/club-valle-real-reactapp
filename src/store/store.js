import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import { userReducer } from "../reducers/userReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger))
);
