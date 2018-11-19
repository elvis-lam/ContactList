import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormLogic from './FormLogic';
// import validatePhoneNumber from '../../utils/validatePhoneNumber';
import fieldForms from './fieldForms';

class ContactNews extends Component {
  renderForm() {
    return _.map(fieldForms, ({ label, name }) => {
      return (
        <Field key={name} component={FormLogic} type="text" label={label} name={name}/>
      );
    });
  }

  render() {
    return (
        <div>
             <form onSubmit={this.props.handleSubmit(this.props.onContactSubmit)}>
                {this.renderForm()}
                <button type="submit" className=" green darken-3 btn-flat right white-text">Next<i className="material-icons right">done</i></button>
            </form>
        </div>
    );
  } 
}

function validate(values) {
    const errors = {};
    // errors.phoneNumber = validatePhoneNumber((values.phoneNumber));

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
  form: 'contacts'
})(ContactNews);