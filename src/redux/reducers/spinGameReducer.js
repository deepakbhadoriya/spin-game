import { SET_WIN, SET_ATTEMPTS } from '../types';

const initialState = {
  numOfWin: 0,
  numOfAttempts: 7,
};

export default function HomeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_WIN:
      return {
        ...state,
        numOfWin: payload,
      };
    case SET_ATTEMPTS:
      return {
        ...state,
        numOfAttempts: payload,
      };
    default:
      return state;
  }
}
