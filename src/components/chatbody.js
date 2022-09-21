import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ChatItem from './chatItem';
import styles from '../styles/chat.module.css';

const ChatBody = ({ data }) => {
  const { messages } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    const chatBody = document.getElementById('chatBody');
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.chatBody} id="chatBody">
      {messages.map(({ message, id, messageId }) => (
        <ChatItem
          key={messageId}
          message={message}
          userId={id}
          currentUserId={data}
        />
      ))}
    </div>
  );
};

ChatBody.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ChatBody;
