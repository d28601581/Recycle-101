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
      const { data } = await axios.post('https://capstone-recycle.herokuapp.com/api/item/newitem', newItem);
      console.log('data', data);
      dispatch(postNewItem(data));
    } catch (error) {
      console.error(error);
    }
  };
};