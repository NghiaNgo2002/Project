// productService.js
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const getToken = () => {
  return JSON.parse(localStorage.getItem("User")).token;
};

const getAuthHeaders = () => {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const ListAllProduct = async () => {
  return await axios.get(`${backendUrl}/api/product`, {
    headers: getAuthHeaders(),
  });
};

export const ViewProductById = async (id) => {
  return await axios.get(`${backendUrl}/api/productdetail/${id}`, {
    headers: getAuthHeaders(),
  });
};
