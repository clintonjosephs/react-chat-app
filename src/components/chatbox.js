import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../redux/chat/chat';
import { setMessages } from '../db/manage';
import styles from '../styles/chat.module.css';

const ChatBox = ({ id }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const data = {
        messageId: uuidv4(),
        message,
        id,
      };

      dispatch(addMessage(data));
      setMessages(data);
      setMessage('');
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.messageForm}>
      <input
        type="text"
        name="name"
        placeholder="Type your message here ..."
        required
        value={message}
        onChange={changeHandler}
      />
      <button type="submit">&gt;&gt;</button>
    </form>
  );
};

ChatBox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChatBox;
