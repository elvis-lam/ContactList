// ContactList displays all Contacts
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fieldForms from './fieldForms';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { Field } from 'redux-form';
import { fetchOneContact } from '../../actions';
// import validatePhoneNumber from '../../utils/validatePhoneNumber';
import './ContactList.css';
import { Link } from 'react-router-dom';


class ContactEdit extends Component {

     componentDidMount() {
        this.props.fetchOneContact();
    }


    render() {
        // return this.props.oneContact.map( one => {
            return (
                <div>
                    <h5>Update Contact</h5>
                    <form>
                        <Field key='1' component="input" type="text" label="First Name"/>
                        <Field key='2' component="input" type="text" label="First Name"/>
                        <Field key='3' component="input" type="text" label="First Name"/>
                        <button type="submit" className="green darken-3 btn-flat right white-text">Submit<i className="material-icons right">done</i></button>
                    </form>
                </div>


            );
        // }) 
    }
 
}

function mapStateToProps({ contacts }) {
    console.log("edit", contacts);
     return { contacts };
}

export default connect(mapStateToProps, actions )(ContactEdit); 