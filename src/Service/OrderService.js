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

  export const ListAllOrders = async () => {
    return await axios.get(`${backendUrl}/api/order`, {
      headers: getAuthHeaders(),
    });
  };


  export const ViewOrderByID = async (orderID) => {
    return await axios.get(`${backendUrl}/api/order/${orderID}`, {
      headers: getAuthHeaders(),
    });
  };

  export const UpdateOrderByID = async (orderID, updatedData) => {
    try {
      return await axios.put(
        `${backendUrl}/api/order/${orderID}`,
        updatedData,
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error("Error updating user profile");
    }
  };

  export const DeleteOrderByID = async (orderID) => {
    return await axios.delete(`${backendUrl}/api/order/${orderID}`, {
      headers: getAuthHeaders(),
    });
  };


  export const ListAllOrdersDetail = async () => {
    return await axios.get(`${backendUrl}/api/orderdetail`, {
      headers: getAuthHeaders(),
    });
  };

  export const ViewOrderDetailByID = async (orderID) => {
    return await axios.get(`${backendUrl}/api/orderdetail/${orderID}`, {
      headers: getAuthHeaders(),
    });
  };

  export const UpdateOrderDetailByID = async (orderID, updatedData) => {
    try {
      return await axios.put(
        `${backendUrl}/api/orderdetail/${orderID}`,
        updatedData,
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error("Error updating user profile");
    }
  };

  export const DeleteOrderDetailByID = async (orderID) => {
    return await axios.delete(`${backendUrl}/api/orderdetail/${orderID}`, {
      headers: getAuthHeaders(),
    });
  };

  export const InsertNewOrder = async (
    user
  ) => {
    try {
      const response =await axios.post(
        `${backendUrl}/api/order/`,
        {
          customerid: user.customerid,
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
          address: user.address,
          email: user.email,
        },
        { headers: getAuthHeaders() }
      );
      return response.data; // Return the response data received from the server
    } catch (error) {
      throw new Error("Error adding new Order");
    }
  };



  
  export const InsertNewOrderDetail = async (
    orderID,
    productdetail
  ) => {
    try {
      return await axios.post(
        `${backendUrl}/api/orderdetail`,
        {
          orderID:orderID,
       product: productdetail,
        },
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error("Error adding new Order detail");
    }
  };