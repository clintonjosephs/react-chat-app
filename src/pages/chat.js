import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChatBody from '../components/chatbody';
import ChatBox from '../components/chatbox';
import ChatHead from '../components/chathead';
import styles from '../styles/chat.module.css';

const Chat = () => {
  const { isLoggedIn } = useSelector(
    (state) => state.usersReducer,
  );

  const { id } = useParams();

  if (isLoggedIn === false || id === '') {
    window.location.href = '/';
  }

  return (
    <div className={styles.container}>
      <ChatHead />
      <ChatBody data={id} />
      <ChatBox id={id} />
    </div>
  );
};

export default Chat;
