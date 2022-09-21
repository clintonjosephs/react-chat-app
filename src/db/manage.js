const db_initial = {
    users: [],
    messages: [],
}

export const initializeStorage = () => {
    const data = localStorage.getItem('chat_db');
    if (data) {
        return JSON.parse(data);
    } else {
        localStorage.setItem('chat_db', JSON.stringify(db_initial));
        return db_initial;
    }
}

export const setUsers = (user) => {
    const db = initializeStorage();
    db.users.push(user);
    localStorage.setItem('chat_db', JSON.stringify(db));
}

export const setMessages = (message) => {
    const db = initializeStorage();
    db.messages.push(message);
    localStorage.setItem('chat_db', JSON.stringify(db));
}
