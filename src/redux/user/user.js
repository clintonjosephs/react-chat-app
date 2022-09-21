// transaction addresses
const CREATE_USER = 'CREATE_USER';
const FETCH_USER = 'FETCH_USER';

// initial state
const initialState = {
  users: [],
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

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER:
      return { ...state, users: [...state.users, payload] };
    case FETCH_USER:
      return state.users.filter((user) => {
        if (user.id === payload) {
          return user.name;
        }
        return null;
      });
    default:
      return state;
  }
};

export default usersReducer;
