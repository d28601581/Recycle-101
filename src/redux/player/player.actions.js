import axios from 'axios';
import ItemActionType from './player.types';

//ACTION CREATORS
export const fetchAllItems = (payload) => ({
  type: ItemActionType.FETCH_ALL_ITEMS,
  payload,
});

//THUNKS

export const fetchAllItemsThunk = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://capstone-recycle.herokuapp.com/api/item' + user);
      console.log('data', data);
      dispatch(fetchAllItems(data));
    } catch (error) {
      dispatch(fetchAllItems(error));
    }
  };
};