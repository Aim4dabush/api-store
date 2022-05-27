import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//context
import { Props } from "../../App";

function Nav() {
  const { cart } = useContext(Props);

  return (
    <nav className="navbar navbar-expand-lg shadow mb-5 rounded bg-primary">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/products" className="nav-link text-white">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link text-white">
            Cart <span>{cart.length > 0 && cart.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
