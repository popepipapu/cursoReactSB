export const logInSession = (index) => {
    return {
      type : LOG_IN_OUT.LOGIN,
      payload : index
    }
  }
  
  export const logOutSession = (msg) => {
    return {
      type : LOG_IN_OUT.LOGOUT,
      payload : msg
    }
  }
  
  export const LOG_IN_OUT = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
  }