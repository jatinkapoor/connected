import axios from 'axios';

import { success, failure } from './alert_actions';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerUser = (user, history) => {

  return (dispatch) => {

    dispatch( {
      type: REGISTER_REQUEST,
      message: 'Registration Started'
    });

    axios.post('/user/register', user).then( user => {
      dispatch({
        type: REGISTER_SUCCESS,
        message: 'Registration Success',
        success: true
      })
      history.push('/login')
      dispatch(success('Registration Successful'))
    }).catch(error => {
      dispatch({
        type: REGISTER_FAILURE,
        error: error,
        success: false,
        message: 'Registration failed'
      });

      dispatch(failure('Registration Failed'));
    });
  }
}
