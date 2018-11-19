// ContactList displays all Contacts
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts }from '../../actions';


class ContactList extends Component {
    componentDidMount() {
        this.props.fetchContacts()
    }

    renderContacts() {
        return this.props.contacts.reverse().map( contact => {
            return (
                <div>
                    <span>{contact.firstName}</span>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {/* <button className="light-blue darken-4 btn-flat white-text" onClick={onContactSubmit}>Contact List</button> 
                <button className="light-blue darken-2 btn-flat white-text" onClick={onChangeSubmit}>Add Contact</button>  */}
                {this.renderContacts()}
            </div>

        );
    }
}

function mapStateToProps({ contacts }) {
    console.log("List CONTACT", contacts);
    return { contacts };
}

export default connect(mapStateToProps, { fetchContacts }) (ContactList); 