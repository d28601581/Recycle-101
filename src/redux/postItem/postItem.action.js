import axios from 'axios';
import PostItemActionTypes from './postItem.type';

//ACTION CREATORS
export const postNewItem = (payload) => ({
  type: PostItemActionTypes.POST_NEW_ITEM,
  payload,
});

//THUNKS

export const postNewItemThunk = (newItem) => {
  return async (dispatch) => {
      console.log(newItem)
    try {
      const { data } = await axios.post('http://localhost:8080/api/item/newitem', newItem);
      console.log('data', data);
      dispatch(postNewItem(data));
    } catch (error) {
      console.error(error);
    }
  };
};