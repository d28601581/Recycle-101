import axios from 'axios';
import NewUserTypes from './newUser.types';

//ACTION CREATORS
export const addNewUser = (payload) => ({
  type: NewUserTypes.ADD_NEW_USER,
  payload,
});

//THUNKS

export const addNewUserThunk = (newUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('http://localhost:8080/api/auth/signup', newUser);
      console.log('data', data);
      dispatch(addNewUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};