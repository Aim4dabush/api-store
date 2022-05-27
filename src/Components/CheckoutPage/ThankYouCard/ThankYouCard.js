import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//context
import { Props } from "../../../App";

function ThankYouCard({ customer }) {
  const { totalPrice } = useContext(Props);
  let history = useHistory();

  const handleBackToShopping = () => {
    history.push("/products");
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <div className="card">
          <div className="card-header bg-primary text-center text-white">
            <h2>
              Thank You {customer.firstName} {customer.lastName} For Your
              Purchase
            </h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 text-center">
                <p className="card-text">
                  Your card {customer.cardNumber} has been charged ${totalPrice}
                  .
                </p>
              </div>
              <div className="col-12 text-center">
                <p className="card-text">
                  Package will be delivered to {customer.street},{" "}
                  {customer.city}, {customer.state} {customer.zip}
                </p>
              </div>
              <div className="col-12 text-center">
                <p className="card-text">
                  Tracking number will be sent to email {customer.email}.
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  onClick={handleBackToShopping}
                >
                  Back To Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouCard;
