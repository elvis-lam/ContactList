import { DELETE_CONTACT } from '../actions/users';

export default function(state = [], action) {
  console.log("Delete reducers", action.payload);
  switch (action.type) {
    case DELETE_CONTACT:
      // return action.payload;
      return state.filter(({ id }) => id !== action.data);
    default:
      return state || {};
  }
}