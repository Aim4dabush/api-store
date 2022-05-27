import axios from "axios";

export const store = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
