import React, { useContext } from "react";

//components
import ProductCard from "./ProductCard/ProductCard";

//context
import { Props } from "../../App";

//data
import {
  electronics,
  jewelery,
  mensClothing,
  store,
  womensClothing,
} from "../../Utilities/Utilities";

function Products() {
  const { loading, products, setProducts } = useContext(Props);

  const handleAll = () => {
    store().then((data) => {
      setProducts(data);
    });
  };

  const handleElectronics = () => {
    electronics().then((data) => {
      setProducts(data);
    });
  };

  const handleJewelery = () => {
    jewelery().then((data) => {
      setProducts(data);
    });
  };

  const handleMensClothing = () => {
    mensClothing().then((data) => {
      setProducts(data);
    });
  };

  const handleWomensClothing = () => {
    womensClothing().then((data) => {
      setProducts(data);
    });
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="d-block d-flex">
        Sort:
        <div className="btn-toolbar ms-2 mb-2" role="toolbar">
          <div className="btn-group me-2" role="group">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAll}
            >
              All
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleElectronics}
            >
              Electronics
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleJewelery}
            >
              Jewelery
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleMensClothing}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleWomensClothing}
            >
              Women's Clothing
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinner-border" role="status" />
      ) : (
        products.map((product) => {
          return (
            <div className="col-3" key={product?.id}>
              <ProductCard
                id={product?.id}
                title={product?.title}
                image={product?.image}
                description={product?.description}
                price={product?.price}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Products;
