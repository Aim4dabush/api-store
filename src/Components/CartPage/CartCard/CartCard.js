import React, { useContext } from "react";

//context
import { Props } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/pro-regular-svg-icons";

function CartCard({ id, title, image, price, quantity, subtotal }) {
  const { cart, setCart } = useContext(Props);

  const handleDeleteProduct = () => {
    const index = cart.findIndex((item) => {
      return item.id === id;
    });
    setCart(cart.splice(index, 1));
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-12">
          <div className="card-header bg-primary text-white text-center d-flex justify-content-between">
            <h3>{title}</h3>
            <button className="btn btn-danger" onClick={handleDeleteProduct}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
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
