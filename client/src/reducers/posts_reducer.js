import {
GET_ALL_POSTS_REQUEST,
GET_ALL_POSTS_SUCCESS,
GET_ALL_POSTS_FAILURE,
CREATE_POST_REQUEST,
CREATE_POST_SUCCESS,
CREATE_POST_FAILURE,
GET_POST_REQUEST,
GET_POST_SUCCESS,
GET_POST_FAILURE,
CREATE_COMMENT_REQUEST,
CREATE_COMMENT_SUCCESS,
CREATE_COMMENT_FAILURE
} from '../actions/posts_actions';

import _ from 'lodash';



const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};


export const posts = (state = {}, action) => {
  switch (action.type) {

    case GET_ALL_POSTS_REQUEST:
      return updateObject(state, action);

    case GET_ALL_POSTS_SUCCESS:
      return _.mapKeys(action.post.posts, '_id');

    case GET_ALL_POSTS_FAILURE:
      return updateObject(state, action);

    case CREATE_POST_REQUEST:
      return updateObject(state, action);

    case CREATE_POST_SUCCESS:
      return updateObject(state, action);

    case CREATE_POST_FAILURE:
      return updateObject(state, action);

    case GET_POST_REQUEST:
      return updateObject(state, action);

    case GET_POST_SUCCESS:
      return _.mapKeys(action.post.posts, '_id');

    case GET_POST_FAILURE:
      return updateObject(state, action);

    case CREATE_COMMENT_REQUEST:
      return updateObject(state, action);

    case CREATE_COMMENT_SUCCESS:
      console.log('in create comment reducer');
      return updateObject(state, action);

    case CREATE_COMMENT_FAILURE:
      return updateObject(state, action);

    default:
      return state
  }

}
