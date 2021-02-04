import axios from 'axios';
<<<<<<< HEAD
import PlayerActionTypes from './player.types';

//ACTION CREATORS
export const fetchAllPlayers = (payload) => ({
  type: PlayerActionTypes.FETCH_ALL_PLAYERS,
=======
import ItemActionType from './player.types';

//ACTION CREATORS
export const fetchAllItems = (payload) => ({
  type: ItemActionType.FETCH_ALL_ITEMS,
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
  payload,
});

//THUNKS

<<<<<<< HEAD
export const fetchAllPlayersThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/players');
      console.log('data', data);
      dispatch(fetchAllPlayers(data));
    } catch (error) {
      console.error(error);
    }
  };
};
=======
export const fetchAllItemsThunk = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/item' + user);
      console.log('data', data);
      dispatch(fetchAllItems(data));
    } catch (error) {
      dispatch(fetchAllItems(error));
    }
  };
};
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
