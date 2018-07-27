import axios from 'axios';
import jwt from 'jsonwebtoken';
import { success, failure } from './alert_actions';

export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE';

export const GET_GROUP_REQUEST = 'GET_GROUP_REQUEST';
export const GET_GROUP_SUCCESS = 'GET_GROUP_SUCCESS';
export const GET_GROUP_FAILURE = 'GET_GROUP_FAILURE';


export const createGroup = (group) => {

  return dispatch => {

    dispatch({
      type: CREATE_GROUP_REQUEST,
      message: 'Creating Group'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    axios.post('/group', group,
      { headers: { Authorization: token } } ).then(result => {
        dispatch({
          type: CREATE_GROUP_SUCCESS,
          message: 'Group Created',
          group: result.data
        })
      }).catch(error => {
        dispatch({
          type: CREATE_GROUP_FAILURE,
          message: error
        })
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

    axios.get('/group', { headers: { Authorization: token } })
     .then(result => {
       console.log(result.data);
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