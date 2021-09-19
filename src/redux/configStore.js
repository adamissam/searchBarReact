import { applyMiddleware, createStore } from "redux";

import searchReudcer from "./reducer/searchReducer";
import thunkMiddleware from "redux-thunk";

export const Store = createStore(
  searchReudcer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
    // loggerMiddleware // neat middleware that logs actions
  )
);
