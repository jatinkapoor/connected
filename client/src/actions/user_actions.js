import axios from 'axios';
import jwt from 'jsonwebtoken';

import {success, failure} from './alert_actions';

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

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;
    axios.post(`/user/`, email ,{headers: { Authorization: token }}).then(result => {
      dispatch({
        type: FIND_USER_SUCCESS,
        user: result.data.user
      })
      if (result.data.user.lenght === 0) {
        dispatch(success("User not found"));
      } else {
        dispatch(success('User added'));
      }
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
    
    axios.get('/user', { headers: { Authorization: token }})
      .then(result => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          message: "Fetched Users Successfully",
          users: result.data
        });
      }).catch(error => {
        dispatch({
          type: FETCH_USERS_FAILURE,
          message: error
        })
      });
  }

}
