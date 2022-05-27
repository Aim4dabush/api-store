import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//context
import { Props } from "../../../App";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/pro-regular-svg-icons";

function ProductDetail({ setItemAdded }) {
  const { products, setCart } = useContext(Props);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const product = {
    id: products[id - 1]?.id,
    title: products[id - 1]?.title,
    image: products[id - 1]?.image,
    description: products[id - 1]?.description,
    price: products[id - 1]?.price,
    rating: products[id - 1]?.rating.rate,
    quantity: null,
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

  const handleAddToCart = (e) => {
    e.preventDefault();
    product.quantity = quantity;

    setCart((prev) => {
      return [...prev, product];
    });

    setItemAdded((prev) => {
      return !prev;
    });
  };

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="card" style={{ width: "50%" }}>
          <div className="row">
            <div className="col-12">
              <div className="card-header bg-primary text-white">
                {product.title}
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="col-9">
                  <div className="card-body">
                    <h5 className="card-title">Description:</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="row">
                      <div className="col-6">
                        <h5 className="card-title">Rating:</h5>
                        <p className="card-text">{product.rating.rate}</p>
                      </div>
                      <div className="col-6">
                        <h5 className="card-title">Price:</h5>
                        <p className="card-text">${product.price}</p>
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
