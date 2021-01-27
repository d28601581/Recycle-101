import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player/player.reducer';
import postItemReducer from './postItem/postItem.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
  newPost: postItemReducer
});

export default rootReducer;
