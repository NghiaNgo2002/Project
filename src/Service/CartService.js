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

export const ListAllCart = async (userID) => {
  return await axios.get(`${backendUrl}/api/cart/${userID}`, {
    headers: getAuthHeaders(),
  });
};

export const AddNewProduct = async (
  userID,
  productID,
  name,
  type,
  price,
  quantity,
  size,
  color
) => {
  console.log(name,type,price,quantity,size,color)
  try {
    return await axios.post(
      `${backendUrl}/api/cart/${user_id}`,
      {
        userID:userID,
        productID:productID,
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        size: size,
        color: color,
      },
      {
        headers: getAuthHeaders(),
      }
    );
  } catch (error) {
    throw new Error("Error adding new product to cart");
  }
};

export const UpdateProduct = async (id, user_id, updateData) => {
  try {
    return await axios.put(
      `${backendUrl}/api/cart/update/${user_id}/${id}`,
      updateData,
      {
        headers: getAuthHeaders(),
      }
    );
  } catch (error) {
    throw new Error("Error updating product");
  }
};

export const DeleteProfileByID = async (id, user_id) => {
  return await axios.delete(`${backendUrl}/api/cart/${id}/${user_id}`, {
    headers: getAuthHeaders(),
  });
};
