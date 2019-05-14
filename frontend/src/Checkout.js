import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Checkout = () => {
  const publishableKey = 'YOUR_STRIPE_PUBLISHABLE_KEY';
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("http://localhost:8000", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Go Premium" 
      name="Business" 
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" 
      amount={999} // In cents
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default Checkout;
