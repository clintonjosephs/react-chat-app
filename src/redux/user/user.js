import { initializeStorage } from '../../db/manage';

// transaction addresses
const CREATE_USER = 'CREATE_USER';
const FETCH_USER = 'FETCH_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
const LOGGED_IN = 'LOGGED_IN';

// initial state
const initialState = {
  users: initializeStorage().users,
  currentUser: null,
  isLoggedIn: false,
};

// syncronous actions
export const createUser = (userDetails) => ({
  type: 'CREATE_USER',
  payload: userDetails,
});

export const fetchUser = (userId) => ({
  type: 'FETCH_USER',
  payload: userId,
});

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
});

export const fetchCurrentUser = () => ({
  type: 'FETCH_CURRENT_USER',
});

export const loginStatus = () => ({
  type: 'LOGGED_IN',
});

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER:
      return {
        ...state, users: [...state.users, payload], currentUser: payload, isLoggedIn: true,
      };
    case FETCH_USER:
      return state.users.filter((user) => {
        if (user.id === payload) {
          return user.name;
        }
        return null;
      });
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case FETCH_CURRENT_USER:
      return state.currentUser;
    case LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

export default usersReducer;
