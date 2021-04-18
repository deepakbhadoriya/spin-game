import { combineReducers } from 'redux';
import user from './userReducer';
import spinGame from './spinGameReducer';

export default combineReducers({ user, spinGame });
