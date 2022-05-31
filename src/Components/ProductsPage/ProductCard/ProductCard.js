import React from "react";
import { NavLink } from "react-router-dom";

function ProductCard({ id, title, image, description, price }) {
  return (
    <NavLink style={{ textDecoration: "none" }} to={`/products/${id}`}>
      <div className="card">
        <div className="row">
          <div className="col-12">
            <div className="card-header bg-primary text-white text-center">
              <h5>{title}</h5>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <img className="img-fluid" src={image} alt={title} />
              </div>
              <div className="col-9">
                <div className="card-body">
                  <h5 className="card-title">Description:</h5>
                  <p className="card-text">{description}</p>
                  <h5 className="card-title">Price:</h5>
                  <p className="card-text">${price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductCard;
