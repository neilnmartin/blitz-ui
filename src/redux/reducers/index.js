import { combineReducers } from 'redux';
import { loginReducer, signupReducer } from './authReducers';

const rootReducer = combineReducers({
  loginReducer,
  signupReducer
});

export default rootReducer;