import {combineReducers, legacy_createStore as createStore } from "redux";
import logger from 'redux-logger';
import messageReducer from "./chat/chat";
import usersReducer from "./user/user";

const reducer = combineReducers({
    usersReducer,
    messageReducer,
});

const store = createStore(reducer, logger);

export default store;