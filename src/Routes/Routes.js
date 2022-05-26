import { Switch, Route } from "react-router-dom";

//components
import Cart from "../Components/CartPage/Cart";
import Checkout from "../Components/CheckoutPage/Checkout";
import Details from "../Components/DetailsPage/Details";
import Products from "../Components/ProductsPage/Products";
import Welcome from "../Components/WelcomePage/Welcome";

export default (
  <Switch>
    <Route exact component={Welcome} path="/" />
    <Route component={Cart} path="/cart" />
    <Route component={Checkout} path="/checkout" />
    <Route exact component={Products} path="/products" />
    <Route component={Details} path="/products/:id" />
  </Switch>
);
