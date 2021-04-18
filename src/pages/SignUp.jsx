import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import userAction from '../redux/actions/userActions';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    phone: '',
  });

  const handleUserChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAction.signUpUser(user, history));
  };

  return (
    <div align="center" className="m-auto py-5">
      <input
        value={user.name}
        placeholder="Name"
        onChange={handleUserChange}
        name="name"
        type="text"
      />
      <br />
      <br />
      <input
        value={user.phone}
        placeholder="Number"
        onChange={handleUserChange}
        name="phone"
        type="text"
      />
      <br />
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignUp;
