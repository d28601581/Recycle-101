import ItemActionType from './player.types';

const INITIAL_STATE = {
  items: undefined,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  console.log('item', action);
  switch (action.type) {
    case ItemActionType.FETCH_ALL_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
