import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/chat/chat';
import { setMessages } from '../db/manage';

const ChatBox = ({ userId }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const data = {
        message,
        userId,
      };

      dispatch(addMessage(data));
      setMessages(data);
      setMessage('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Type your message here ..."
        required
        value={message}
        onChange={changeHandler}
      />
      <button type="submit">Send Chat</button>
    </form>
  );
};

ChatBox.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ChatBox;
