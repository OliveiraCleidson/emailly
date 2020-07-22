import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from 'react-redux';

const Payments = (props) => {
  return (
    <StripeCheckout
      amount={500}
      token={token => props.handleToken(token)}
      currency={"BRL"}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      name="Emaily"
      description="R$ 5 for 5 email credits!"
      label="Add Credits"
    >
      <button className="btn">
        Add Credits
      </button>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);