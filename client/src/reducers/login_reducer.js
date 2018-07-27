
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login_actions';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const login = (state = {}, action) => {
  switch(action.type) {

    case LOGIN_REQUEST:
      return updateObject(state, action);

    case LOGIN_SUCCESS:
      return updateObject(state, action);

    case LOGIN_FAILURE:
      return updateObject(state, action);

    default:
      return state
  }

}
