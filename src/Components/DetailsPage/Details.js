import React, { useState } from "react";

//components
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductDirect from "./ProductDirect/ProductDirect";

function Details() {
  const [itemAdded, setItemAdded] = useState(false);

  return (
    <div>
      {itemAdded ? (
        <ProductDirect />
      ) : (
        <ProductDetail setItemAdded={setItemAdded} />
      )}
    </div>
  );
}

export default Details;
