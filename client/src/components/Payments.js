import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Hot Feedback"
        description="$5 for 5 email survey credits"
        amount={500}
        token={token => console.log("token",token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <button className="btn amber darken-2">Add CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
