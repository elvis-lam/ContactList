import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Contacts from './contactList/Contacts';
import ContactEdit from './contactList/ContactEdit';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="grey lighten-3">
                    <Header />
                    
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/contacts' component={Dashboard} />                    
                    <Route exact path='/contacts/new' component={Contacts} />                    
                    <Route exact path='/contacts/:id/edit' component={ContactEdit} />                    
                </div>
            </BrowserRouter>
        )
    }
};

export default connect(null, actions)(App);