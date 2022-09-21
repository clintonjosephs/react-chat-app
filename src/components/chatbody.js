import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ChatItem from './chatItem';

const ChatBody = ({ data }) => {
  const { messages } = useSelector((state) => state.messageReducer);
  return (
    <div style={{ margin: '2rem', height: '5rem' }}>
      {messages.map(({ message, userId, messageId }) => (
        <ChatItem
          key={messageId}
          message={message}
          userId={userId}
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
