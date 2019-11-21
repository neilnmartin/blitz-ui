import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../actions/actions";

export const authReducers = (
    state = {
      loading: false,
      currentUser: {}
    },
    action
  ) => {
    let { id, email, username, firstName, lastName } = action.data;
    let error = action.error;
    switch (action.type) {
    case LOG_IN_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        currentUser: {
          id,
          email,
          username,
          firstName,
          lastName
        }
      });
    case LOG_IN_FAILURE:
      return Object.assign({}, state, {
        error: error
      });
    case LOG_OUT: 
      return Object.assign({}, state, {
        loading: false,
        currentUser: {}
      })
    case SIGN_UP_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case SIGN_UP_SUCCESS:
      console.log(action.signupUserData)
      return Object.assign({}, state, {
        loading: false,
        currentUser: {
          id,
          email,
          username,
          firstName,
          lastName
        }
      });
    case SIGN_UP_FAILURE:
      return Object.assign({}, state, {
        error: error
      });
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
}

/* let storeStateSample = {
  loading: false,
  currentUser: {
    id,
    email,
    username,
    firstName,
    lastName,
    token
  },
} */
