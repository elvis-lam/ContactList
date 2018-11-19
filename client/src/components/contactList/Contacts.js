// Contacts will show both contactNew and contactList

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ContactNews from './ContactNews';
import ContactForm from './ContactForm';

class Contacts extends Component{
    
    state = { showNewContact: false };

    renderCurrentContent() {

        if (this.state.showNewContact) {
            return < ContactForm onChangeSubmit={() => this.setState({ showNewContact: false })}/>;
            
        }
        return < ContactNews onContactSubmit={() => this.setState({ showNewContact: true })}/>;
    }

    render() {
        return (
            <div>
                {/* < ContactList/> */}
                {this.renderCurrentContent()}      
            </div>
        );
    }
}
 
export default reduxForm({
    form: 'contacts'
})(Contacts);