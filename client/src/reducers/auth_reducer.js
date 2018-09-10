import {
  AUTHENTICATION_STATUS_TRUE,
AUTHENTICATION_STATUS_FALSE} from '../actions/auth_actions';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const auth = (state = {isAuthenticated: false}, action) => {

  switch (action.type) {

    case AUTHENTICATION_STATUS_TRUE:
      return updateObject(state, action);

    case AUTHENTICATION_STATUS_FALSE:
      return updateObject(state, action);

    default:
      return state;
  }
}