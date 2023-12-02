// productService.js
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/product`);
    return response;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${backendUrl}/api/product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product by ID");
  }
};
