// SignIn Form for user to sign up
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormLogic from './FormLogic';
import { Link } from 'react-router-dom';
import fieldForms from './fieldForms';
import validateEmails from '../../utils/validateEmails';
// import passwordMatch from '../../utils/passwordMatch';
import './SignInForm.css';

class SignInForm extends Component {

    // Map the input based on the field Forms
    renderFormFields(){
        return _.map(fieldForms, ({ label, name }) => {
            return (
                <Field key={name} component={FormLogic} type='text' label={label} name={name} />

            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="center">
                    <Link to='/' className="btn-flat white-text googleSign">Sign Up with Google</Link>
                    <h6 className='orm'><span>or</span></h6>
                    <h5 >Continue as Guest</h5>
                </div>

                {/* <form> */}
                    
                    {/* {this.renderFormFields()} */}
                    {/* <div className="conf">
                        <label>Password</label>
                        <Field type="password" name="password" component="input"/>
                    </div>
                    <div className="conf">
                        <label>Confirm Password</label>
                        <Field type="password" name="conf_password" component="input" validate={passwordMatch("password")}/>
                    </div>
                    <div className="center">
                        <button type="submit" className="btn-flat white-text signUp">Sign Up </button>
                    </div>
                </form> */}
            </div>
        )
    }
}


// Validating email is in correct format (Front-End Validation)
function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || '');

    _.each(fieldForms, ({
        name,
        messageError
    }) => {
        if (!values[name]) {
            errors[name] = messageError;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignInForm'
})(SignInForm);