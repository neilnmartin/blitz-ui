const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        currentUser: {
          id: action.id
        }
      };
    default:
      return {
        currentUser: {}
      };
  }
};

export default currentUserReducer;
