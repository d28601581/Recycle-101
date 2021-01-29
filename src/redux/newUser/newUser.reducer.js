import NewUserTypes from './newUser.types';

const INITIAL_STATE = {
  newUserData: '',
  loggedInUser: ''
};

const newUserReducer = (state = INITIAL_STATE, action) => {
  console.log('New User Data', action);
  switch (action.type) {
    case NewUserTypes.ADD_NEW_USER:
      return { ...state, newUserData: action.payload };
    case NewUserTypes.USER_LOGGED_IN:
      return {...state, loggedInUser: action.payload};
    default:
      return state;
  }
};

export default newUserReducer;