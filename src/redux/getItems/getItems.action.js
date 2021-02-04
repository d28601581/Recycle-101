import axios from 'axios';
import GetItemsType from './getItems.type';

//ACTION CREATORS
export const getItems = (payload) => ({
  type: GetItemsType.GET_ALL_ITEM,
  payload,
});

export const getItemsError = payload => ({
    type: GetItemsType.GET_ITEMS_ERROR,
    payload
})

//THUNKS
// export const getItemsThunk = (user) => {
//   return async (dispatch) => {
//       console.log("Printing user",user)
//     try {
//       const { data } = await axios.get('http://localhost:8080/api/item/', user);
//       console.log('data', data);
//       dispatch(getItems(data));
//     } catch (error) {
//       dispatch(getItemsError(error))
//     }
//   };
// };

export const getItemsThunk = (user) => {
    return async (dispatch) => {
        console.log('from thunk', user)
      try {
        const { data } = await axios.get('https://capstone-recycle.herokuapp.com/api/item/getitem/' + user);
        console.log('data', data);
        dispatch(getItems(data));
      } catch (error) {
        console.error(error);
      }
    };
  };