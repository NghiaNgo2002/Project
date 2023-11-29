// ProfileManage.js
import React from 'react';
import './ProfileManage.css'; // Import the CSS file
import Sidebar from '../Dashboard/sidebar';
import Header from '../Dashboard/Header-Admin';
import {Link} from "react-router-dom";
import { ListAllProfile } from '../../Service/UserService'; // Import ListAllProfile function
import {useState,useEffect} from "react";



const ProfileManage = () => {
  const [profiles, setProfiles] = useState([]);
  const [id, setID] = useState('');

  const handleViewUser = () => {
   

  };
  




  const fetchProfiles = async () => {
    try {
      const response = await ListAllProfile(); // Call the ListAllProfile function
      setProfiles(response.data); // Set the fetched profiles in state
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  useEffect(() => {
    // Fetch profiles when the component mounts
    fetchProfiles();
  }, []); // Empty dependency array ensures this runs only once





  return (
    <div>
      <Header />
      <div className="main-content44">
        <div className="card-container44">
          <div className="card44">
            <h3>View User</h3>
            <div className="input-group44">
              <input 
              type="text" 
              placeholder="Enter User ID" 
              value={id}
              onChange={(e) => setID(e.target.value)}
              />
             <Link to={`/view-profile/${id}`}><button onClick={handleViewUser}>View User</button></Link>
            </div>
          </div>
          <div className="card44">
            <h3>Add User</h3>
            <div className="input-group44">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Email" />
              {/* Add other input fields for last name, phone, address, email */}
              <button>Insert User</button>
            </div>
          </div>
          <div className="card44">
            <h3>List User</h3>
            <div className="input-group44">
              <Link to = '/profile-list'><button>List All Users</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default ProfileManage;
