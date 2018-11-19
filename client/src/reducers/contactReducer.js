import { FETCH_CONTACTS } from '../actions/users';

export default function(state = [], action) {
  console.log("Contact reducers", action.payload);
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.payload;
    default:
      return state;
  }
}