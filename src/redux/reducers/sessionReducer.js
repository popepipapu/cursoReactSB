import { LOG_IN_OUT } from '../actions/session';

let initialState = false;

export const session = (state = initialState, action) => {

    switch(action.type) {
      case LOG_IN_OUT.LOGIN:  
      state = true;
      return state;
      case LOG_IN_OUT.LOGOUT:
        state = false;
          return state;
      default:
        return state;
    }
  }
  
  export default session;