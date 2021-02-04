<<<<<<< HEAD
import PlayerActionTypes from './player.types';

const INITIAL_STATE = {
  allPlayers: [],
};

const playerReducer = (state = INITIAL_STATE, action) => {
  console.log('PL', action);
  switch (action.type) {
    case PlayerActionTypes.FETCH_ALL_PLAYERS:
      return { ...state, allPlayers: action.payload };
=======
import ItemActionType from './player.types';

const INITIAL_STATE = {
  items: undefined,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  console.log('item', action);
  switch (action.type) {
    case ItemActionType.FETCH_ALL_ITEMS:
      return { ...state, items: action.payload };
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
    default:
      return state;
  }
};

<<<<<<< HEAD
export default playerReducer;
=======
export default itemReducer;
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
