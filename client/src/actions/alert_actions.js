export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
export const FAILURE_MESSAGE = 'FAILURE_MESSAGE';


export const success = (message) => {
  return (dispatch) => {
    dispatch({
      type: SUCCESS_MESSAGE,
      message: message,
      show: true
    })
  }
}

export const failure = (message) => {
  return (dispatch) => {
    dispatch({
      type: FAILURE_MESSAGE,
      message: message,
      show: true
    })
  }
}
