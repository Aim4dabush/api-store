import React, { useState } from "react";

//components
import Nav from "./Components/Nav/Nav";

//routes
import routes from "./Routes/Routes";

//styles
import "./App.scss";

export const Props = React.createContext({});

function App() {
  const [startShopping, setStartShopping] = useState(false);

  return (
    <Props.Provider value={{ setStartShopping: setStartShopping }}>
      <div className="container-fluid vh-100">
        {startShopping && <Nav />}
        {routes}
      </div>
    </Props.Provider>
  );
}

export default App;
