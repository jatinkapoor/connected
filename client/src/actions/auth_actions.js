export const AUTHENTICATION_STATUS_TRUE = 'AUTHENTICATION_STATUS_TRUE';
export const AUTHENTICATION_STATUS_FALSE = 'AUTHENTICATION_STATUS_FALSE';

export const authSuccess = () => {

  
  
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATION_STATUS_TRUE,
      isAuthenticated: true,
    });
  }
}

export const authFailure = () => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATION_STATUS_FALSE,
      isAuthenticated: false,
    });
  }
}