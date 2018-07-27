import axios from 'axios';
import jwt from 'jsonwebtoken';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const FIND_USER_REQUEST = 'FIND_USER_REQUEST';
export const FIND_USER_SUCCESS = 'FIND_USER_SUCCESS';
export const FIND_USER_FAILURE = 'FIND_USER_FAILURE';

export const ADD_USER_TO_GROUP_REQUEST = 'ADD_USER_TO_GROUP_REQUEST';
export const ADD_USER_TO_GROUP_SUCCESS = 'ADD_USER_TO_GROUP_SUCCESS';
export const ADD_USER_TO_GROUP_FAILURE = 'ADD_USER_TO_GROUP_FAILURE';


export const findUser = ( email ) => {

  return dispatch => {

    dispatch({
      type: FIND_USER_REQUEST,
      message: 'Finding User'
    })

    axios.get('/user', email, {}).then(result => {
      console.log(result.data);
      dispatch({
        type: FIND_USER_SUCCESS,
        user: result.data.user
      })
    }).catch(error => {
      dispatch({
        type: FIND_USER_FAILURE,
        message: error
      })
    })
  }
}
