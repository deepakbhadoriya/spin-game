import { LOAD_USER, LOGOUT_USER } from '../types';

const signUpUser = (user, history) => (dispatch) => {
  dispatch({ type: LOAD_USER, payload: user });
  history.push('/spin-game');
};

const logOutUser = () => (dispatch, history) => {
  dispatch({ type: LOGOUT_USER });
  history.push('/');
};

const userActions = { signUpUser, logOutUser };

export default userActions;
