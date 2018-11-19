import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import contactReducer from './contactReducer';
import deleteContactReducer from './deleteContactReducer';

export default combineReducers({
    auth: authReducer,
    contacts: contactReducer,
    deleteContact: deleteContactReducer,
    form: reduxForm
});