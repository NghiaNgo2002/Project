// orderProfilePage.js
import React, { useState, useEffect } from 'react';
import './Vieworder.css'; // Import the CSS file
import Sidebar from '../Dashboard/sidebar';
import Header from '../Dashboard/Header-Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DeleteOrderByID, ViewOrderByID,UpdateOrderByID } from '../../Service/OrderService'; // Adjust the path as needed
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const [editableFields, setEditableFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);



  const { orderID } = useParams();
  useEffect(() => {
    // Make an API call using the 'id' parameter
    const fetchData = async () => {
      try {
        const response = await ViewOrderByID(orderID);
        setOrderData(response.data); // Assuming 'response.data' contains the order information
        console.log('Profile data:', response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    // Call the fetchData function when 'id' changes or the component mounts
    fetchData();
  }, [orderID]); // Re-run the effect whenever 'id' changes


  const navigate = useNavigate();
  const handleDelete = async (orderID, event) => {
    event.preventDefault(); // Prevent default form submission behavior
    event.stopPropagation(); // Stop the event from propagating further up the DOM tree
    try {
      await DeleteOrderByID(orderID);
      toast.success('Profile deleted successfully');
  
      // Redirect to '/profile-admin' after successful deletion
      navigate('/order-manage');
    } catch (error) {
      console.error('Error deleting profile:', error);
      toast.error('Error deleting profile: Unable to delete the profile');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditableFields({ ...editableFields});
  };

  const handleSave = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const orderID = orderData.orderID; // Get the ID from orderData
  
    try {
      const updatedOrderData = { ...orderData, ...editableFields };
      setOrderData(updatedOrderData); // Update orderData with the changes from editableFields
  
      await UpdateOrderByID(orderID, updatedOrderData); // Perform the update API call
  
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
      <div className="order-profile">
        <hr />
        <h2>Order Profiles</h2>
        <ul className="order-list">
          {Object.keys(orderData).length > 0 && (
            <form >
              <div>
                <strong>ID: </strong>
                <span onClick={() => handleEdit(orderData.orderID)}>
                  {`${orderData.orderID}`}
                </span>
              </div> 
              <div>
                <strong> First Name: </strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={editableFields.firstname || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        firstname: e.target.value,
                      })
                    }
                  />
                ) : (
                  `${orderData.firstname}`
                )}
              </div>
              <div>
                <strong> Last Name: </strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={editableFields.lastname || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        lastname: e.target.value,
                      })
                    }
                  />
                ) : (
                  `${orderData.lastname}`
                )}
              </div>
              <div>
                <strong> Phone: </strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={editableFields.phone || ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        phone: e.target.value,
                      })
                    }
                  />
                ) : (
                  `${orderData.phone}`
                )}
              </div>
              <div>
                <strong> Email: </strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={editableFields.email|| ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  `${orderData.email}`
                )}
              </div>
              <div>
                <strong> Address: </strong>
                {isEditing ? (
                  <input
                    type="text"
                    value={editableFields.address|| ''}
                    onChange={(e) =>
                      setEditableFields({
                        ...editableFields,
                       address: e.target.value,
                      })
                    }
                  />
                ) : (
                  `${orderData.address}`
                )}
              </div>
             

              <div className="action-buttons">
                {!isEditing ? (
                  <>
                    <button
                      type = "button"
                      className="action-button delete"
                      onClick={(e) => handleDelete(orderData.orderID, e)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="action-button update"
                      onClick={() => handleEdit(orderData.orderID)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </>
                ) : (
                  <button className="action-button confirm" type="submit" onClick={handleSave}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                )}
              </div>
            </form>
          )}
        </ul>
      </div>
      <Sidebar />
    </div>
  </div>
);
};

export default OrderList;
