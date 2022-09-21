const dbInitial = {
  users: [],
  messages: [],
};

export const initializeStorage = () => {
  const data = localStorage.getItem('chat_db');
  if (data) {
    return JSON.parse(data);
  }
  localStorage.setItem('chat_db', JSON.stringify(dbInitial));
  return dbInitial;
};

export const setUsers = (user) => {
  const db = initializeStorage();
  db.users.push(user);
  localStorage.setItem('chat_db', JSON.stringify(db));
};

export const setMessages = (message) => {
  const db = initializeStorage();
  db.messages.push(message);
  localStorage.setItem('chat_db', JSON.stringify(db));
};
