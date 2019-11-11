import { LOG_IN_REQUEST, LOG_IN_SUCCESS } from "../actions/actions";

const loginReducer = (
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
    default:
      return {
        loading: false,
        currentUser: {}
      };
  }
}

export default loginReducer;

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
