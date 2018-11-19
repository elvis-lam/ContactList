// Contacts will show both contactNew and contactList

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Contacts from './Contacts';
import ContactList from './ContactList';


class Contacts extends Component{
    
    state = { showContact: false };

    renderCurrentContent() {

        if (this.state.showContact) {
            return < Contacts onChangeSubmit={() => this.setState({ showContact: false })}/>;
            
        }
        return < ContactList onContactSubmit={() => this.setState({ showContact: true })}/>;
    }

    render() {
        return (
            <div>
                {this.renderCurrentContent()}      
            </div>
        );
    }
}
 
export default reduxForm({
    form: 'contacts'
})(Contacts);