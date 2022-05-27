import React, { useContext } from "react";

//component
import CartCard from "./CartCard/CartCard";
import ConfirmTotal from "./ConfirmTotal/ConfirmTotal";

//context
import { Props } from "../../App";

function Cart() {
  const { cart } = useContext(Props);

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          {cart?.map((item) => {
            return (
              <div className="col-12" key={item.id}>
                <CartCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price}
                  subtotal={item.subtotal}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-6">
        <ConfirmTotal />
      </div>
    </div>
  );
}

export default Cart;
