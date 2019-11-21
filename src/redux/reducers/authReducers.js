import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../actions/actions";

const authReducer = ( state = {
      loading: false,
      currentUser: {}
    },
    action) => {
    switch (action.type) {
    case LOG_IN_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case LOG_IN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        currentUser: {
          id: action.data.id,
          email: action.data.email,
          username: action.data.username,
          firstName: action.data.firstName,
          lastName: action.data.lastName
        }
      });
    case LOG_IN_FAILURE:
      return Object.assign({}, state, {
        error: action.error
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
          id: action.data.id,
          email: action.data.email,
          username: action.data.username,
          firstName: action.data.firstName,
          lastName: action.data.lastName
        }
      });
    case SIGN_UP_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
}

export default authReducer

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
