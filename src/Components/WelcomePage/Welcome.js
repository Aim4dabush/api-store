import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//context
import { Props } from "../../App";

function Welcome() {
  const { setStartShopping } = useContext(Props);
  let history = useHistory();

  const handleStartShopping = () => {
    setStartShopping((prev) => {
      return !prev;
    });
    history.push("/products");
  };

  return (
    <div className="row vh-100">
      <div className="col d-flex align-items-center justify-content-center">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <div className="card-body d-flex align-items-center flex-column">
            <h5 className="card-title">
              Welcome To The New Shopping Experience
            </h5>
            <p className="card-text">Enjoy our products</p>
            <button className="btn btn-primary" onClick={handleStartShopping}>
              Enter Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
