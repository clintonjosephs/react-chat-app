import React from 'react';
import { useSelector } from 'react-redux';
import ChatBody from '../components/chatbody';
import ChatBox from '../components/chatbox';
import ChatHead from '../components/chathead';

const Chat = () => {
  const { currentUser } = useSelector((state) => state.usersReducer);

  if (currentUser === null) {
    window.location.href = '/';
  }

  return (
    <div>
      <ChatHead />
      <ChatBody />
      <ChatBox />
    </div>
  );
};

export default Chat;
