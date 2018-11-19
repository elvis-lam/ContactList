// MyContacts will show both MyContactList and Favorites

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MyContactList from './MyContactList';
// import Favorites from './Favorites';

class Contacts extends Component{
    
    state = { showContactList: false };

    renderCurrentContent() {
        
        if (this.state.showNewContact) {
            return < MyContactList onChangeSubmit={() => this.setState({ showContactList: false })}/>;
            
        }
        return < MyContactList onContactSubmit={() => this.setState({ showContactList: true })}/>;
    }

    render() {
        return (
            <div>
                {this.renderCurrentContent()}      
            </div>
        );
    }
}
 
export default connect(mapStateToProps, { fetchContacts })(MyContacts)