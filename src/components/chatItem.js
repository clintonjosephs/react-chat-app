import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../styles/chat.module.css';

const ChatItem = ({ message, userId, currentUserId }) => {
  const { users } = useSelector((state) => state.usersReducer);

  let chatItemSet = '';
  const datax = users.filter((user) => user.userId === userId);
  if (userId === currentUserId) {
    chatItemSet = (
      <div className={`${styles.chatItem} ${styles.right}`}>
        {' '}
        You
        {' '}
        <hr />
        {message}
      </div>
    );
  } else {
    chatItemSet = (
      <div className={`${styles.chatItem} ${styles.left}`}>
        {datax[0].userName}
        {' '}
        <hr />
        {message}
      </div>
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
