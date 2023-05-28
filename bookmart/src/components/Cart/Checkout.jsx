import React from "react";
import StripeCheckout from "@wapps/react-stripe-checkout";
const Checkout = () => {
  const handleToken =(token)=>{
    console.log(token);
  }
  return (
    <>
      <StripeCheckout>
        stripeKey='pk_test_51NBuoISHRZMTWDUF4ahv4X4pmIZNI5rjkuqXxUUHRzolMIyZHYQJ52LpDbAXWSXxm7tOcL1TjIJwu6ghubyqoK2100cnxE34b9'
        token={handleToken}
        billingAddress 
        shippingAddress
        name='Books'
        amount=100
      </StripeCheckout>
    </>
  );
};

export default Checkout;
