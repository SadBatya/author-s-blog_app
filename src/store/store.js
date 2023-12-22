import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
  appReducer,
  userReducer,
  usersReducer,
  postReducer,
  postsReducer,
} from './reducers';

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
});

const composeEnhangers = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
  reducer,
  composeEnhangers(applyMiddleware(thunk))
);
