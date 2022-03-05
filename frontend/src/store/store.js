import thunk from "redux-thunk";
import contentReducer from "./reducers/contentReducer";
const { createStore, applyMiddleware, combineReducers } = require("redux");

const rootReducer = combineReducers({ contentReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
