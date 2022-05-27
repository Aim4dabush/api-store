import React from "react";

function CartCard({ id, title, image, price, quantity, subtotal }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-12">
          <div className="card-header bg-primary text-white text-center">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="col-12">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <img className="img-fluid" src={image} alt={title} />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <h5 className="card-title">Quantity:</h5>
                    <p className="card-text">{quantity}</p>
                  </div>
                  <div className="col-6">
                    <h5 className="card-title">Price:</h5>
                    <p className="card-text">{price}</p>
                  </div>
                  <div className="col-6">
                    <h5 className="card-title">Subtotal:</h5>
                    <p className="card-text">${subtotal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
