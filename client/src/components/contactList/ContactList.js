// ContactList displays all Contacts
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import validatePhoneNumber from '../../utils/validatePhoneNumber';
import './ContactList.css';

class ContactList extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    handleDelete(contactId) {
        this.props.fetchDeleteContact(contactId);
    }
    
    handleEdit(contactId) {
        console.log("handleEdit", contactId);
        this.props.fetchOneContact(contactId);
    }
    
    renderContacts() {
 
        return this.props.contacts.map( contact => {
            return (

                <div key={contact._id}>
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-2">
                                <div className="card-content white-text">
                                    <span className="card-title">{contact.firstName} {contact.lastName}</span>
                                    <p>{contact.phoneNumber}</p>
                                </div>
                                <div className="card-action">
                                    <a href={contact._id}><i className="material-icons">add</i></a>
                                    <a onClick={() => this.handleEdit(contact)} href={`/api/contacts/${contact._id}`} ><i className="material-icons">edit</i></a>
                                    <a href={`api/${contact._id}/star`}><i className="material-icons">star</i></a>
                                    <a href="#" onClick={() => this.handleDelete(contact)}><i className="material-icons">delete</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        if (this.props.contacts && this.props.contacts.length) {
            return (
                <div className="contain">
                    <div className="start">
                        {this.renderContacts()} 
                    </div>
                </div>

            );
        }
        return (<div></div>)
    }
}


// function phoneSyntax(value) {
//     const phone = validatePhoneNumber(value.phoneNumber);

//     return phone;
// }

function mapStateToProps({ contacts, deleteContact }) {
    // console.log("List CONTACT", contacts, deleteContact);
    return { contacts, deleteContact };
}

export default connect(mapStateToProps, actions)(ContactList); 