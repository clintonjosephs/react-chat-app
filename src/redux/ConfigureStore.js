import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import logger from 'redux-logger';
import messageReducer from './chat/chat';
import usersReducer from './user/user';

const reduxStateSyncConfig = {};

const reducer = combineReducers({
  usersReducer,
  messageReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunk,
    createStateSyncMiddleware(reduxStateSyncConfig),
  ),
);
initMessageListener(store);
export default store;
