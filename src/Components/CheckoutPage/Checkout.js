import React, { useState } from "react";

//components
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import ThankYouCard from "./ThankYouCard/ThankYouCard";

function Checkout() {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiration: "",
    code: "",
  });
  const [submitOrder, setSubmitOrder] = useState(false);

  return (
    <div>
      {submitOrder ? (
        <ThankYouCard customer={customer} />
      ) : (
        <CheckoutCard
          customer={customer}
          setCustomer={setCustomer}
          setSubmitOrder={setSubmitOrder}
        />
      )}
    </div>
  );
}

export default Checkout;
