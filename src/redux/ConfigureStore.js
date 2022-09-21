import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer from './chat/chat';
import usersReducer from './user/user';

const reducer = combineReducers({
  usersReducer,
  messageReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
