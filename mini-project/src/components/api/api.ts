import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(`${API_URL}/products/${product.id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`);
  return response.data;
};

export const addProductToCart = async (product) => {
  const response = await axios.post(`${API_URL}/carts`, product);
  return response.data;
};

export const removeProductFromCart = async (id) => {
  const response = await axios.delete(`${API_URL}/carts/${id}`);
  return response.data;
};
