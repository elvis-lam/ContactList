// SignIn Form for user to sign up
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';
import './loginForm.css';

class LoginForm extends Component {


    render() {
        return (
            <div className="container">
                <div className="center">
                    {/* Redirect to Google Oauth */}
                    <a href='/auth/google' className="btn-flat white-text googleSign">Log in with Google</a>
                    <h6 className='orm'><span>or</span></h6>

                    <h5>Log in as Guest</h5>
                    <Link to="contacts" className="btn-flat white-text signUp">Continue as Guest</Link>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm);