import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/registration_actions';

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const registration = (state = {}, action) => {

  switch(action.type) {

    case REGISTER_REQUEST:
      return updateObject(state, action);
    case REGISTER_SUCCESS:
      return updateObject(state, action);
    case REGISTER_FAILURE:
      return updateObject(state, action);

    default:
      return state
  }
}
