import { FETCH_USER } from '../actions/users';

export default function(state = null, action) {
    console.log("Auth reducers", action.payload);

    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
    
}