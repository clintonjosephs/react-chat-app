import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setUsers } from '../db/manage';
import { createUser } from '../redux/user/user';

const Auth = () => {
  const userInfo = () => ({
    userName: '',
    userId: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(userInfo());

  const { userName } = userData;

  const changeHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      userName: e.target.value,
      userId: uuidv4(),
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim() !== '' && userName.length >= 3) {
      dispatch(createUser(userData));
      setUsers(userData);
      navigate('/chat');
    } else {
      // message that data is not correct
    }
  };

  return (
    <>
      <h3>Fill in your name to proceed</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={changeHandler}
        />
        <button type="submit">Join Chat</button>
      </form>
    </>
  );
};

export default Auth;
