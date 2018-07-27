
import axios from 'axios';
import jwt from 'jsonwebtoken';

import { success, failure } from './alert_actions';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE';


export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';



export const createPost = (post, callback ) => {

  return dispatch => {
    dispatch({
      type: CREATE_POST_REQUEST,
      message: 'Creating Post'
    })
    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;
    axios.post('/posts', post, {
      headers: { Authorization: token }
    }).then( result => {
      callback();
      dispatch({
        type: CREATE_POST_SUCCESS,
        message: 'Post created',
        post: result
      });
      dispatch(success('Post Successfully Created'));
      }).catch(error => {
      dispatch({
        type: CREATE_POST_FAILURE,
        message: 'Post creation failed',
        message: error
      })
      dispatch(failure('Post Creation Failed'));
    });
  }
}

export const getPosts = (history) => {

  return (dispatch) => {
    dispatch({
      type: GET_ALL_POSTS_REQUEST,
      message: 'Getting Posts'
    })
    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;
    axios.get('/posts', {
      headers: { Authorization: token }
    }).then(result => {
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        message: 'Get posts success',
        post: result.data
      });
      dispatch(success('Posts Successfully Fetched'));
    }).catch(error => {
      dispatch({
        type: GET_ALL_POSTS_FAILURE,
        message: 'Get posts failed',
        error: error
      })
      history.push('/login');
    });
  }
}


export const getPost = (id, history) => {

  return (dispatch) => {

    dispatch({
      type: GET_POST_REQUEST,
      message: 'Getting Post'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    axios.get(`/posts/${id}`, {
      headers: { Authorization: token }
    }).then(result => {
      const post = result.data.posts[0].post ? result.data.posts[0].post : '';
      dispatch({
        type: GET_POST_SUCCESS,
        message: 'Get a post',
        post: result.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_POST_FAILURE,
        message: 'Get post failed',
        error: error
      });
      history.push('/login');
    })
  }
}


export const createComment = (postId, comment, callback) => {

  console.log("create comment action");

  return (dispatch) => {

    dispatch({
      type: CREATE_COMMENT_REQUEST,
      message: 'Creating Comment'
    })

    const jwt = localStorage.getItem('jwtToken');
    const token = `Bearer ${jwt}`;

    axios.post(`/posts/${postId}`, comment, {
      headers: { Authorization: token }
    }).then( (result) => {
      dispatch(success('Comment Successfully Created'));
      callback();

    }).catch(error => {
      dispatch({
        type: CREATE_COMMENT_FAILURE,
        message: 'Comment Creation Failed',
        error: error
      })
      dispatch(failure('Comment Creation Failed'));
    });
  }
}
