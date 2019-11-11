import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from "../actions/actions";

const signupReducer = (
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
      let {
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

export default signupReducer;