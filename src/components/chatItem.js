import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/chat.module.css';

const ChatItem = ({ message, userId, currentUserId }) => {
  let chatItemSet = '';
  if (userId === currentUserId) {
    chatItemSet = (
      <div className={`${styles.chatItem} ${styles.right}`}>{message}</div>
    );
  } else {
    chatItemSet = (
      <div className={`${styles.chatItem} ${styles.left}`}>{message}</div>
    );
  }
  return <div className={styles.hold}>{chatItemSet}</div>;
};

ChatItem.propTypes = {
  message: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default ChatItem;
