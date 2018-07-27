import { SUCCESS_MESSAGE, FAILURE_MESSAGE } from '../actions/alert_actions';



const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const alert = (state = {}, action) => {

  switch(action.type) {

    case SUCCESS_MESSAGE:
      return updateObject(state, action);

    case FAILURE_MESSAGE:
      return updateObject(state, action);

    default:
      return state;
  }
}
