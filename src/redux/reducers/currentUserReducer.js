const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        loading: false,
        currentUser: {
          id: action.id,
          email: action.email,
          username: action.username,
          firstName: action.firstName,
          lastName: action.lastName,
        }
      };
    default:
      return {
        currentUser: {}
      };
  }
};

export default currentUserReducer;