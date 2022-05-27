import React from "react";
import { useHistory } from "react-router-dom";

function ProductDirect() {
  const history = useHistory();

  const handleContinueToCart = () => {
    history.push("/cart");
  };

  const handleKeepShopping = () => {
    history.push("/products");
  };

  return (
    <div className="row w-100">
      <div className="col d-flex justify-content-center">
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">
              Would you like to keep shopping or continue to cart?
            </h5>
            <div className="row w-100">
              <div className="col-6 d-flex justify-content-center">
                <button className="btn btn-danger" onClick={handleKeepShopping}>
                  Keep Shopping
                </button>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <button
                  className="btn btn-success"
                  onClick={handleContinueToCart}
                >
                  Continue to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDirect;
