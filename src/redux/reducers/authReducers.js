import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../actions/actions";

export const loginReducer = (
  state = {
    loading: false,
    currentUser: {}
  },
  action
) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case LOG_IN_SUCCESS:
      let { id, email, username, firstName, lastName } = action.loginUserData;
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
      let error = action.error
      return Object.assign({}, state, {
        error: error
      });
    case LOG_OUT: 
      return Object.assign({}, state, {
        loading: false,
        currentUser: {}
      })
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
};

export const signupReducer = (
  state = {
    loading: false,
    currentUser: {}
  },
  action
) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case SIGN_UP_SUCCESS:
      let { id, email, username, firstName, lastName } = action.signupUserData;
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
      let error = action.error
      return Object.assign({}, state, {
        error: error
      });
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
};

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
