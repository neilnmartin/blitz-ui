import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from "../actions/actions";

const currentUserReducer = (
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
      const { id, email, username, firstName, lastName } = action.loginUserData;
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
    case SIGN_UP_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case SIGN_UP_SUCCESS:
      const {
        id,
        email,
        username,
        firstName,
        lastName
      } = action.signupUserData;
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
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
}

export default currentUserReducer;

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
