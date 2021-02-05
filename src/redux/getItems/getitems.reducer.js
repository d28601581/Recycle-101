import GetItemsType from './getItems.type';

const INITIAL_STATE = {
  items: [],
  getItemsError: {}
};

const getItemsReducer = (state = INITIAL_STATE, action) => {
  console.log('get Item', action);
  switch (action.type) {
    case GetItemsType.GET_ALL_ITEM:
      return { ...state, items: action.payload };
    case GetItemsType.GET_ITEMS_ERROR: 
        return {...state, getItemsError: action.payload};
    default:
      return state;
  }
};

export default getItemsReducer;