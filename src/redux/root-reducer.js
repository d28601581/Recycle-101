import { combineReducers } from 'redux';
<<<<<<< HEAD

// Reducers
import playerReducer from './player/player.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
=======
import newUserReducer from './newUser/newUser.reducer';

// Reducers
import playerReducer from './player/player.reducer';
import postItemReducer from './postItem/postItem.reducer';
import getItemsReducer from './getItems/getitems.reducer'

const rootReducer = combineReducers({
  newUserReducer, 
  playerReducer,
  postItemReducer,
  getItemsReducer
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
});

export default rootReducer;
