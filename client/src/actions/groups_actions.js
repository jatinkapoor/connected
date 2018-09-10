import axios from 'axios';
import jwt from 'jsonwebtoken';
import { success, failure } from './alert_actions';
import { authSuccess, authFailure } from './auth_actions';

export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE';

export const GET_GROUP_REQUEST = 'GET_GROUP_REQUEST';
export const GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
export const GET_GROUP_FAILURE = 'GET_GROUP_FAILURE';

export const ADD_USER_TO_GROUP_REQUEST = 'ADD_USER_TO_GROUP_REQUEST';
export const ADD_USER_TO_GROUP_SUCCESS = 'ADD_USER_TO_GROUP_SUCCESS';
export const ADD_USER_TO_GROUP_FAILURE = 'ADD_USER_TO_GROUP_FAILURE';


export const createGroup = (group, callback) => {

  return dispatch => {

    dispatch({
      type: CREATE_GROUP_REQUEST,
      message: 'Creating Group'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    if (jwt) {
      dispatch(authSuccess());
    } else {
      dispatch(authFailure());
    }

    axios.post('/group', group,
      { headers: { Authorization: token } }).then(result => {
        dispatch({
          type: CREATE_GROUP_SUCCESS,
          message: 'Group Created',
          group: result.data
        })
        dispatch(success('Group Successfully Created, You can now add contacts'));
        callback();
      }).catch(error => {
        dispatch({
          type: CREATE_GROUP_FAILURE,
          message: error
        })
        dispatch(failure('Group could not be created'));
        callback();
      });
  }
}


export const getGroups = () => {

  return dispatch => {

    dispatch({
      type: GET_GROUP_REQUEST,
      message: 'Getting groups'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    if (jwt) {
      dispatch(authSuccess());
    } else {
      dispatch(authFailure());
    }

    axios.get('/group', { headers: { Authorization: token } })
      .then(result => {
        dispatch({
          type: GET_GROUP_SUCCESS,
          message: 'Get Groups',
          groups: result.data.groups
        })
      }).catch(error => {
        dispatch({
          type: GET_GROUP_FAILURE,
          message: error
        })
      });
  }
}

export const addUser = (email, groupId, callback) => {

  return dispatch => {

    dispatch({
      type: ADD_USER_TO_GROUP_REQUEST,
      message: 'Adding user to group'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    if (jwt) {
      dispatch(authSuccess());
    } else {
      dispatch(authFailure());
    }

    const reqBody = {
      groupId: groupId,
      ...email
    }

    axios.put('/group/addUser', reqBody, { headers: { Authorization: token } })
      .then(result => {

        dispatch({
          type: ADD_USER_TO_GROUP_SUCCESS,
          message: 'Added User To Group',
        })
        dispatch(success('New User Added to Group'));
        callback();
      }).catch(error => {
        if (error.response.status === 409) {
          dispatch(failure('User Already exists in the group'));
          dispatch({
            type: GET_GROUP_FAILURE,
            message: error
          })
        } else if (error.response.status === 404) {
          dispatch(failure('User Not Found'));
          dispatch({
            type: GET_GROUP_FAILURE,
            message: error
          })
        }else {
          dispatch({
            type: GET_GROUP_FAILURE,
            message: error
          })
          dispatch(failure('User Cannot be added'));
        }
        callback();
      });
  }
}

