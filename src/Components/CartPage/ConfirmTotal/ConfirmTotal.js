import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

//context
import { Props } from "../../../App";

function ConfirmTotal() {
  const { cart, totalPrice, setTotalPrice } = useContext(Props);
  let history = useHistory();

  const handleProceedToCheckout = () => {
    history.push("/checkout");
  };

  useEffect(() => {
    const total = cart.reduce((value, item) => {
      return value + item.subtotal;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="card">
      <div className="card-header text-center">
        <h3>Confirm Total</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-center">
            <h5 className="card-title">Is Your total correct?</h5>
            <p className="card-text">${totalPrice}</p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTotal;
