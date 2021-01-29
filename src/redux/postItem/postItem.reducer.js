
import PostItemActionTypes from './postItem.type';

const INITIAL_STATE = {
  newItem: [],
};

const postItemReducer = (state = INITIAL_STATE, action) => {
  console.log('Post Item', action);
  switch (action.type) {
    case PostItemActionTypes.POST_NEW_ITEM:
      return { ...state, newItem: action.payload };
    default:
      return state;
  }
};

export default postItemReducer;