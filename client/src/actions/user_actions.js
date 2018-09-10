import axios from 'axios';
import jwt from 'jsonwebtoken';

import {success, failure} from './alert_actions';
import { authSuccess, authFailure } from './auth_actions';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FIND_USER_REQUEST = 'FIND_USER_REQUEST';
export const FIND_USER_SUCCESS = 'FIND_USER_SUCCESS';
export const FIND_USER_FAILURE = 'FIND_USER_FAILURE';

export const ADD_USER_TO_GROUP_REQUEST = 'ADD_USER_TO_GROUP_REQUEST';
export const ADD_USER_TO_GROUP_SUCCESS = 'ADD_USER_TO_GROUP_SUCCESS';
export const ADD_USER_TO_GROUP_FAILURE = 'ADD_USER_TO_GROUP_FAILURE';

export const CHECKIN_USER_REQUEST = 'CHECKIN_USER_REQUEST';
export const CHECKIN_USER_SUCCESS = 'CHECKIN_USER_SUCCESS';
export const CHECKIN_USER_FAILURE = 'CHECKIN_USER_FAILURE';


export const findUser = ( email ) => {

  return dispatch => {

    dispatch({
      type: FIND_USER_REQUEST,
      message: 'Finding User'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    if (jwt) {
      dispatch(authSuccess());
    } else {
      dispatch(authFailure());
    }

    axios.post(`/user/`, email ,{headers: { Authorization: token }}).then(result => {
      dispatch({
        type: FIND_USER_SUCCESS,
        user: result.data.user
      })
      if (result.data.user.length === 0) {
        dispatch(success("User not found"));
      } else {
        dispatch(success('User added'));
      }
      dispatch(authSuccess())
    }).catch(error => {
      dispatch({
        type: FIND_USER_FAILURE,
        message: error
      })
    })
  }
}


export const getUsers = () => {

  return (dispatch) => {
    
    dispatch({
      type: FETCH_USERS_REQUEST,
      message: 'Fetching Users'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    if (jwt) {
      dispatch(authSuccess());
    }else {
      dispatch(authFailure());
    }
    
    axios.get('/user', { headers: { Authorization: token }})
      .then(result => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          message: "Fetched Users Successfully",
          users: result.data
        })     
      }).catch(error => {
        dispatch({
          type: FETCH_USERS_FAILURE,
          message: error
        })
      });
  }
}

export const checkIn = (callback) => {
  return (dispatch) => {
    dispatch({
      type: CHECKIN_USER_REQUEST,
      message: 'Trying to checkin'
    })
    const jwt = localStorage.getItem('jwtToken');

    if (jwt) {
      dispatch(authSuccess())
    } else {
      dispatch(authFailure())
    }


    const token = `Bearer ${jwt}`;
    axios.put('/user', null,{ headers: { Authorization: token } }).then(result => {
      dispatch({
        type: CHECKIN_USER_SUCCESS,
        message: "You are checked In"
      })
      dispatch(success('You are checked In, See ya tomorrow'));
      callback();
      
    }).catch(error => {
      dispatch({
        type: CHECKIN_USER_FAILURE,
        message: error
      })
      dispatch(failure("Something Went Wrong !! We couldn't check you in"));
      callback();
    })
  }
}