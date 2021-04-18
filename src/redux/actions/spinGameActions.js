import { SET_ATTEMPTS, SET_WIN } from '../types';

const setAttempts = (num) => (dispatch) => {
  dispatch({ type: SET_ATTEMPTS, payload: num });
};

const setWin = (num) => (dispatch) => {
  dispatch({ type: SET_WIN, payload: num });
};

const userActions = { setAttempts, setWin };

export default userActions;
