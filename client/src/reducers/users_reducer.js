import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/user_actions';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const users = (state = {}, action) => {

  switch(action.type){

    case FETCH_USERS_REQUEST:
      return updateObject(state, action);
    case FETCH_USERS_SUCCESS:
      return updateObject(state, action);  
    case FETCH_USERS_FAILURE:
      return updateObject(state, action);

    default:
      return state
  }
}