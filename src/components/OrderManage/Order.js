
import React, { useState, useEffect } from 'react';
import './Order.css'; // Import the CSS file
import Sidebar from '../Dashboard/sidebar';
import Header from '../Dashboard/Header-Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faSearch, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { ListAllOrders, UpdateOrderByID, DeleteOrderByID } from '../../Service/OrderService';
import {Link} from "react-router-dom";


const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const [editableFields, setEditableFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const[orderIDSearch,setOrderIDSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ListAllOrders(); 
        setOrderData(response.data); 
        console.log(response.data); // Assuming the data is in the 'data' property of the response
      } catch (error) {
        // Handle errors if the request fails
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the fetchData function to execute the API call

  }, []); // The empty dependency array means this effect runs only once (on mount)


  const handleDelete = async (orderID) => {
    try {
      await DeleteOrderByID(orderID);
      const updatedOrderList = orderData.filter(order => order.orderID !== order.orderID);
      setOrderData(updatedOrderList); // Update the state with the new order list (excluding the deleted order)
      toast.success('Profile deleted successfully'); // Display success toast
    } catch (error) {
      console.error('Error deleting profile:', error);
      toast.error('Error deleting profile'); // Display error toast
    }
  };

  const handleEdit = (orderID) => {
    setIsEditing(true);
    const orderToEdit = orderData.find(order => order.orderID === orderID);
    setEditableFields({ ...editableFields, [orderID]: { ...orderToEdit } });
  };


  const handleSave = async (event, orderID) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    try {
      // Handle save functionality for the specific order (e.g., update order data in the backend)
      const updatedOrderData = orderData.map(order => {
        if (order.orderID === orderID) {
          return { ...order, ...editableFields[orderID] };
        }
        return order;
      });
  
      // Update the order data state
      setOrderData(updatedOrderData);
      console.log(updatedOrderData);
      await UpdateOrderByID(orderID, editableFields[orderID]);
      
      // Perform API call to update order data here if needed
      // Example: await updateProfileById(id, editableFields[id]);
  
      setIsEditing(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };
  return (
    <div>
        <Header />
        <ToastContainer />
    <div className="container-profile">
    <div className="search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Order by ID"
              value={orderIDSearch}
              onChange={(e) => setOrderIDSearch(e.target.value)}
            />
            <Link to={`/view-order/${orderIDSearch}`}>
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </Link>
          </div>
        </div>
      <div className="order-profile">
        <hr />

        <h2>Order List</h2>
        <ul className="order-list">
        {orderData.map((order) => (
          <li key={order.orderID}>
          <form onSubmit={(event) => handleSave(event, order.orderID)}>
              <div>
                <strong> Order ID: </strong>
                <span onClick={() => handleEdit(order.orderID)}>
                  {`${order.orderID}`}
                </span>
              </div>   
              <div>
                <strong> Customer ID: </strong>
                <span onClick={() => handleEdit(order.customerid)}>
                  {`${order.customerid}`}
                </span>
              </div>   
              <div>
                <strong> First Name: </strong>
                {isEditing && editableFields[order.orderID] ? (
                  <input
                    type="text"
                    value={editableFields[order.orderID].firstname || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        [order.orderID]: {
                          ...editableFields[order.orderID],
                          firstname: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  `${order.firstname}`
                )}
              </div>
              <div>
                <strong> Last Name: </strong>
                {isEditing && editableFields[order.orderID] ? (
                  <input
                    type="text"
                    value={editableFields[order.orderID].lastname || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        [order.orderID]: {
                          ...editableFields[order.orderID],
                          lastname: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  `${order.lastname}`
                )}
              </div>
              <div>
                <strong> Email: </strong>
                {isEditing && editableFields[order.orderID] ? (
                  <input
                    type="text"
                    value={editableFields[order.orderID].email || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        [order.orderID]: {
                          ...editableFields[order.orderID],
                          email: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  `${order.email}`
                )}
              </div>
              <div>
                <strong> Phone: </strong>
                {isEditing && editableFields[order.orderID] ? (
                  <input
                    type="text"
                    value={editableFields[order.orderID].phone|| ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        [order.orderID]: {
                          ...editableFields[order.orderID],
                          phone: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  `${order.phone}`
                )}
              </div>
              <div>
                <strong> Address: </strong>
                {isEditing && editableFields[order.orderID] ? (
                  <input
                    type="text"
                    value={editableFields[order.orderID].address|| ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        [order.orderID]: {
                          ...editableFields[order.orderID],
                          address: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  `${order.address}`
                )}
              </div>
                  <div className="action-buttons">
                {!isEditing ? (
                  <>
                    <button
                      className="action-button delete"
                      onClick={() => handleDelete(order.orderID)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="action-button update"
                      onClick={() => handleEdit(order.orderID)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </>
                ) : (
                  <button
                    className="action-button confirm"
                    type="submit"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                )}
              </div>
              </form>
            </li>
          ))}
        </ul>
      </div>
      <Sidebar />
    </div>
    </div>
  );
};

export default OrderList;
