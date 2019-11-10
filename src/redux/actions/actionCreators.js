import { 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS, 
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS 
} from './actions'

export async function loginRequest(email) {
  return { 
    type: LOG_IN_REQUEST, 
    email
  }
}

export async function loginSuccess(loginUserData) {
  return { 
    type: LOG_IN_SUCCESS, 
    loginUserData,
    receivedAt: Date.now()
  }
}