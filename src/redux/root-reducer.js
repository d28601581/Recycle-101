import { combineReducers } from 'redux';
import newUserReducer from './newUser/newUser.reducer';

// Reducers
import playerReducer from './player/player.reducer';
import postItemReducer from './postItem/postItem.reducer';

const rootReducer = combineReducers({
  newUserReducer, 
  playerReducer,
  postItemReducer
});

export default rootReducer;
