import axios from "axios";

export const products = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
