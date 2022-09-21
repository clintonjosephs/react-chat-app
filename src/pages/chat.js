import React from 'react';
import { useSelector } from 'react-redux';
import ChatBody from '../components/chatbody';
import ChatBox from '../components/chatbox';
import ChatHead from '../components/chathead';

const Chat = () => {
  const { currentUser, isLoggedIn } = useSelector(
    (state) => state.usersReducer,
  );

  if (currentUser === null || isLoggedIn === false) {
    window.location.href = '/';
  }

  const { userId } = currentUser;

  return (
    <div>
      <ChatHead />
      <ChatBody data={userId} />
      <ChatBox id={userId} />
    </div>
  );
};

export default Chat;
