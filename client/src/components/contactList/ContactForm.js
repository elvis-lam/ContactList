import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import fieldForms from './fieldForms';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ContactForm = ({ submitContact, fieldValues, onContactSubmit, history }) => {
  const reviewFields = _.map(fieldForms, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {fieldValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entry</h5>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onContactSubmit}>
        Back
      </button>
      <button onClick={() => submitContact(fieldValues, history)} className="green darken-3 btn-flat right white-text">
        Confirm
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { fieldValues: state.form.contacts.values };
}

export default connect(mapStateToProps, actions)(withRouter(ContactForm));