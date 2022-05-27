import React, { useContext } from "react";

//context
import { Props } from "../../../App";

function CheckoutCard({ customer, setCustomer, setSubmitOrder }) {
  const { setCart, totalPrice } = useContext(Props);

  const handleOnchange = (e) => {
    setCustomer((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmitOrder((prev) => {
      return !prev;
    });

    setCart([]);
    console.log(customer);
  };

  return (
    <div className="row d-flex justify-content-center w-100">
      <div className="col-12 text-center">
        <h2>Purchase Form</h2>
      </div>
      <div className="col-6">
        <form className="row" onSubmit={handleOnSubmit}>
          <div className="col-4">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              value={customer.firstName}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control"
              id="lastName"
              name="lastName"
              type="text"
              value={customer.lastName}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              value={customer.email}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="street">
              Street
            </label>
            <input
              className="form-control"
              id="street"
              name="street"
              type="text"
              value={customer.street}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-6">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              className="form-control"
              id="city"
              name="city"
              type="text"
              value={customer.city}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="state">
              State
            </label>
            <input
              className="form-control"
              id="state"
              name="state"
              type="text"
              value={customer.state}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-2">
            <label className="form-label" htmlFor="zip">
              Zipcode
            </label>
            <input
              className="form-control"
              id="zip"
              name="zip"
              type="text"
              value={customer.zip}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-8">
            <label className="form-label" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={customer.cardNumber}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-2">
            <label className="form-label" htmlFor="expiration">
              Expiration Date
            </label>
            <input
              className="form-control"
              id="expiration"
              name="expiration"
              type="date"
              value={customer.expiration}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-2">
            <label className="form-label" htmlFor="code">
              3 Digit Code
            </label>
            <input
              className="form-control"
              id="code"
              name="code"
              type="text"
              value={customer.code}
              onChange={handleOnchange}
            />
          </div>
          <div className="col-6">
            <p>Total: ${totalPrice}</p>
            <button className="btn btn-success" type="submit">
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutCard;
