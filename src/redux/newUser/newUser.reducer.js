import NewUserTypes from './newUser.types';

const INITIAL_STATE = {
  newUserData: '',
};

const newUserReducer = (state = INITIAL_STATE, action) => {
  console.log('New User Data', action);
  switch (action.type) {
    case NewUserTypes.ADD_NEW_USER:
      return { ...state, newUserData: action.payload };
    default:
      return state;
  }
};

export default newUserReducer;