import React, { useEffect, useState } from "react";

//components
import Nav from "./Components/Nav/Nav";

//routes
import routes from "./Routes/Routes";

//utilities
import { store } from "./Utilities/Utilities";

export const Props = React.createContext({});

function App() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [startShopping, setStartShopping] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (loading) {
      store().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <Props.Provider
      value={{
        cart: cart,
        loading: loading,
        products: products,
        setCart: setCart,
        setProducts: setProducts,
        setStartShopping: setStartShopping,
        setTotalPrice: setTotalPrice,
        totalPrice: totalPrice,
      }}
    >
      <div className="container-fluid vh-100">
        {startShopping && <Nav />}
        {routes}
      </div>
    </Props.Provider>
  );
}

export default App;
