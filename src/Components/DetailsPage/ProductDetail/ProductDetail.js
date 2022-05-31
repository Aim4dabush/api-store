import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//context
import { Props } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faArrowLeft,
} from "@fortawesome/pro-regular-svg-icons";

function ProductDetail({ setItemAdded }) {
  const { products, setCart } = useContext(Props);
  const { id } = useParams();
  let history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const item = products.find((product) => {
    return product.id === id;
  });

  const handleAddToCart = (e) => {
    e.preventDefault();
    item.quantity = quantity;
    item.subtotal = quantity * item.price;

    setCart((prev) => {
      return [...prev, item];
    });

    setItemAdded((prev) => {
      return !prev;
    });
  };

  const handleBack = () => {
    history.push("/products");
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      return prev - 1;
    });
  };

  const handleIncrement = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const handleQuantity = () => {
    setQuantity((prev) => {
      return prev;
    });
  };

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="card" style={{ width: "50%" }}>
          <div className="row">
            <div className="col-12">
              <div className="card-header bg-primary text-white text-center d-flex justify-content-between">
                <h3>{item.title}</h3>
                <button className="btn btn-danger" onClick={handleBack}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="col-9">
                  <div className="card-body">
                    <h5 className="card-title">Description:</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="row">
                      <div className="col-6">
                        <h5 className="card-title">Rating:</h5>
                        <p className="card-text">{item.rating}</p>
                      </div>
                      <div className="col-6">
                        <h5 className="card-title">Price:</h5>
                        <p className="card-text">${item.price}</p>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-6">
                        <div className="input-group" style={{ width: "135px" }}>
                          <button
                            className="btn btn-danger"
                            onClick={handleDecrement}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <input
                            className="form-control"
                            type="number"
                            value={quantity}
                            onChange={handleQuantity}
                          />
                          <button
                            className="btn btn-success"
                            onClick={handleIncrement}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <button
                          className="btn btn-primary"
                          onClick={handleAddToCart}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
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

export default ProductDetail;
