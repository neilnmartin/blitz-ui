import {LOG_IN_REQUEST, LOG_IN_SUCCESS} from '../actions/actions'

function currentUserReducer(
  state = {
    loading: false,
    currentUser: {}
  }, action) {
    switch(action.type) {
      case LOG_IN_REQUEST:
        return Object.assign({}, state, {
          loading: true
        })
      case LOG_IN_SUCCESS:
        const { id, email, username, firstName, lastName } = action.payload
        return Object.assign({}, state, {
          loading: false,
          currentUser: {
            id,
            email,
            username,
            firstName,
            lastName
          }
        })
      default:
        return {
          loading: false,
          currentUser: {}
        }
    }
}

export default currentUserReducer;