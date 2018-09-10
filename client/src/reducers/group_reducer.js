import { CREATE_GROUP_REQUEST,
  CREATE_GROUP_SUCCESS,
  CREATE_GROUP_FAILURE, GET_GROUP_REQUEST, GET_GROUP_SUCCESS, GET_GROUP_FAILURE } from '../actions/groups_actions';

import _ from 'lodash';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
export const groups = (state = {}, action) => {

  switch(action.type) {

    case CREATE_GROUP_REQUEST:
      return updateObject(state, action);

    case CREATE_GROUP_SUCCESS:
      return updateObject(state, action);

    case CREATE_GROUP_FAILURE:
      return updateObject(state, action);
    case GET_GROUP_REQUEST:
      return updateObject(state, action);
    case GET_GROUP_SUCCESS:
      return updateObject(state, action);
    case GET_GROUP_FAILURE:
      return updateObject(state, action);

    default:
      return state;
  }

}
