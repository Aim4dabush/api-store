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
  const [products, setProducts] = useState([]);
  const [startShopping, setStartShopping] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    store().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Props.Provider
      value={{
        cart: cart,
        products: products,
        totalPrice: totalPrice,
        setCart: setCart,
        setStartShopping: setStartShopping,
        setTotalPrice: setTotalPrice,
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
