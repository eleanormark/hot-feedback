// SurveyNew shows SurveyForm and SurveyForm Review
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // classic way of initializing component level state
  // constructor(props) {
  //   super(props);

  //   this.state = { showFormReview: false };
  // }

  //Create React App has a babel plugin for initialiaing component level state
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={()=> this.setState({showFormReview: false})}/>;
    }
    return <SurveyForm  onSurveySubmit={() => this.setState({showFormReview: true})}/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({form: 'surveyForm'})(SurveyNew);
