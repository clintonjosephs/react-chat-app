import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ChatItem from './chatItem';
import styles from '../styles/chat.module.css';

const ChatBody = ({ data }) => {
  const { messages } = useSelector((state) => state.messageReducer);
  return (
    <div className={styles.chatBody}>
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
