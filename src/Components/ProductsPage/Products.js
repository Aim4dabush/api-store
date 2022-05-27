import React, { useContext } from "react";

//components
import ProductCard from "./ProductCard/ProductCard";

//context
import { Props } from "../../App";

function Products() {
  const { products } = useContext(Props);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-3" key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              rating={product.rating.rate}
              price={product.price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
