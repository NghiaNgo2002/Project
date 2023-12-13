import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { ListOrderDetailByUserID } from "../../Service/OrderService";
import './ShopHistory.css'

function History() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Function to fetch order details
  const fetchOrderDetails = async () => {
    try {
      if (!userId) {
        console.error("User ID not found");
        return;
      }

      const response = await ListOrderDetailByUserID(userId);
      setOrderDetails(response.data);
    } catch (error) {
      console.error("Error fetching order details:", error);
      // Handle error fetching order details
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem("User");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        if (parsedData && parsedData.accounts && parsedData.accounts.id) {
          const userAccountId = parsedData.accounts.id;
          setUserId(userAccountId); // Set userId state with the extracted ID
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    if (userId) {
      // Fetch order details when userId is available
      fetchOrderDetails();
    }
  }, [userId]);

  useEffect(() => {
    console.log("orderDetails:", orderDetails); // Log orderDetails to check its content
  }, [orderDetails]);
  // Function to render order details grouped by orderID
  // Function to render order details grouped by orderID
const renderOrderDetails = () => {
    if (!Array.isArray(orderDetails.orderDetails) || orderDetails.orderDetails.length === 0) {
      return (
        <div className="no-orders-message">
          <p>No order details available</p>
        </div>
      );
    }
  
    // Group order details by orderID
    const groupedOrders = {};
    orderDetails.orderDetails.forEach((order) => {
      if (!groupedOrders[order.orderID]) {
        groupedOrders[order.orderID] = [];
      }
      groupedOrders[order.orderID].push(order);
    });
  
    // Render order details grouped by orderID
    return Object.keys(groupedOrders).map((orderID) => (
      <div key={orderID} className="order-block">
        <h3>Order ID: {orderID}</h3>
        <ul>
          {groupedOrders[orderID].map((orderItem) => (
            <li key={orderItem.productID}>
              <p>Product ID: {orderItem.productID}</p>
              <p>Product Name: {orderItem.productname}</p>
              <p>Type: {orderItem.type}</p>
              <p>Size: {orderItem.size}</p>
              <p>Price: {orderItem.price}</p>
              <p>Color: {orderItem.color}</p>
              <p>Quantity: {orderItem.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    ));
  };
  
  

  return (
    <div>
      <div className="p-2 header">
        <Header />
      </div>
      <div className="order-history">
        <h2>Your Order History</h2>
        {renderOrderDetails()} {/* Render order details */}
      </div>
      <div className="p-2 footer">
        <Footer />
      </div>
    </div>
  );
}

export default History;
