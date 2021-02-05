import axios from 'axios';
import NewUserTypes from './newUser.types';

//ACTION CREATORS
export const addNewUser = (payload) => ({
  type: NewUserTypes.ADD_NEW_USER,
  payload,
});

export const userLogIn = (payload) => ({
  type: NewUserTypes.USER_LOGGED_IN,
  payload
});

export const loginError = (payload) => ({
  type: NewUserTypes.LOGIN_ERROR,
  payload
})


//THUNKS

export const addNewUserThunk = (newUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('https://capstone-recycle.herokuapp.com/api/auth/signup', newUser);
      console.log('data', data);
      dispatch(addNewUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const userLogInThunk = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('https://capstone-recycle.herokuapp.com/api/auth/login', user);
      console.log('Login', data);
      dispatch(userLogIn(data));
    } catch (error) {
      dispatch(loginError(error.response.data));
    }
  };
};