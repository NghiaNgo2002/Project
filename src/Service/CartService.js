import bcrypt from "bcryptjs";
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

export const ListAllCart = async () => {
  return await axios.get(`${backendUrl}/api/cart`, {
    headers: getAuthHeaders(),
  });
};

export const AddNewProduct = async (
  name,
  type,
  price,
  quantity,
  size,
  color
) => {
  try {
    return await axios.post(
      `${backendUrl}/api/cart`,
      {
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        size: size,
        color: color,
      },
      { headers: getAuthHeaders() }
    );
  } catch (error) {
    throw new Error("Error adding product to cart");
  }
};

export const UpdateProductByID = async (id, updatedData) => {
  try {
    return await axios.put(`${backendUrl}/api/cart/${id}/update`, updatedData, {
      headers: getAuthHeaders(),
    });
  } catch (error) {
    throw new Error("Error updating product in cart");
  }
};

export const DeleteProduct = async (id) => {
  return await axios.delete(`${backendUrl}/api/cart/${id}`, {
    headers: getAuthHeaders(),
  });
};
