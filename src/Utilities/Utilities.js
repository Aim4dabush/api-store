import axios from "axios";

export const store = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const electronics = async () => {
  const res = await axios.get(
    "https://fakestoreapi.com/products/category/electronics"
  );
  return res.data;
};
export const jewelery = async () => {
  const res = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  return res.data;
};
export const mensClothing = async () => {
  const res = await axios.get(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  return res.data;
};
export const womensClothing = async () => {
  const res = await axios.get(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  return res.data;
};
