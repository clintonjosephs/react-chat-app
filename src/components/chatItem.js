import React from 'react';
import PropTypes from 'prop-types';

// , userId, currentUserId
const ChatItem = ({ message }) => <div>{message}</div>;

ChatItem.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatItem;
