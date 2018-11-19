// Return a function that makes a request only after the request is completed 
import axios from 'axios';
import { FETCH_USER } from './users';
import { FETCH_CONTACTS } from './users';
import { DELETE_CONTACT } from './users';

// Fetch User logged in session
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}; 

// Create new Contact
export const submitContact = (values, history) => async dispatch => {
    const res = await axios.post('/api/contacts', values);
    console.log('in the submit', res.data);
    history.push('/contacts');
    dispatch({ type: FETCH_CONTACTS, payload: res.data });
}

// Get ALL Contacts
export const fetchContacts = () => async dispatch => {
    const res = await axios.get('/api/contacts');
    console.log(res.data);
    dispatch({ type: FETCH_CONTACTS, payload: res.data });
}

// Get Contact by ID *** Reducer API failing?
export const fetchOneContact = (contact, history) => async dispatch => {
    console.log(contact);
    const res = await axios.get('/api/contacts/', {params: {id: contact._id}});
    history.push('/contacts/:id/edit');
    dispatch({ type: FETCH_CONTACTS, payload: res.data });
}

// Delete a Contact *** Reducer API failing?
export const fetchDeleteContact = (contact, history) => async dispatch => {
    console.log("hi", contact._id, history);
    const res = await axios.delete('/api/delete/'+ contact._id);
    console.log('here');
    history.push('/contacts');
    dispatch({ type: DELETE_CONTACT, payload: res.data });
}