// SurveyForm shows a form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';

// reduxform (works like the connect helper) allows our component to communicate with the redux store
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="btn-flat amber darken-2 left white-text">
            Cancel
          </Link>
          <button type="submit" className="btn-flat amber darken-2 right white-text">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {}

  errors.emails = validateEmails(values.emails || '');

  _.forEach(FIELDS, ({name, label}) => {
    if (!values[name]){
      errors[name] = `You must provide a ${label}.`
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
