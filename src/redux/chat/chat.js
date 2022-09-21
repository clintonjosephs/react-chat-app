import { initializeStorage } from '../../db/manage';

// addresses
const ADD_MESSAGE = 'ADD_MESSAGE';
const FETCH_MESSAGES = 'FETCH_MESSAGES';
const POPULATE_MESSAGES = 'SET_MESSAGES';

// inital state for messages
const initialState = {
  messages: initializeStorage().messages,
};

// syncronous actions
export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const fetchMessages = () => ({
  type: 'FETCH_MESSAGES',
});

export const populateMessages = (payload) => ({
  type: 'POPULATE_MESSAGES',
  payload,
});

// reducer for managing messages
const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, payload] };
    case FETCH_MESSAGES:
      return state.messages;
    case POPULATE_MESSAGES:
      return { ...state, messages: payload };
    default:
      return state;
  }
};

export default messageReducer;
