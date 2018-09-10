import axios from 'axios';
import jwt from 'jsonwebtoken';

import {success, failure} from './alert_actions';
import { authSuccess, authFailure} from './auth_actions';


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const loginUser = (email, password, history) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      message: 'Login Process Started'
    })
    const signInData = {
      email: email,
      password: password
    }
    axios.post('/user/login', signInData).then(result => {
      localStorage.removeItem('jwtToken');
      localStorage.setItem('jwtToken', result.data.token);
      let decoded = jwt.decode(result.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        idToken: result.data.token,
        user: decoded,
        message: 'Welcome to connected',
        success: true
      });

      dispatch(success('Login Success'));
      dispatch(authSuccess());
      history.push('/');
    }).catch(error => {
      dispatch({
        type: LOGIN_FAILURE,
        error: error,
        message: 'Login failed',
        success: false
      })
      dispatch(failure('Login Failure'));
      dispatch(authFailure());
    })
  };
}
