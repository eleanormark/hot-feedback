// SurveyForm shows a form for user to add input
import React, { Component } from 'react';

// reduxform (works like the connect helper) allows our component to communicate with the redux store
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField'

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
