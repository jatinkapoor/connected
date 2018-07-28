import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { registration } from './registration_reducer';
import { login } from './login_reducer';
import { posts } from './posts_reducer';
import { groups } from './group_reducer';
import { alert } from './alert_reducer';
import {users} from './users_reducer';

export default combineReducers({
  registration: registration,
  alert: alert,
  login: login,
  posts: posts,
  groups: groups,
  users: users,
  form: formReducer
});
