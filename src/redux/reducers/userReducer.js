import { LOAD_USER, LOGOUT_USER } from '../types';

const initialState = {
  user: null,
  loggedIn: false,
};

export default function HomeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
}
