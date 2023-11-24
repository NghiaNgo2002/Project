import React, { useState } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Password() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id, setID] = useState("");
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const User = JSON.parse(localStorage.getItem('User'));
  setID(User.accounts.id);
  const handleConfirmChange = async () => { // Mark the function as async
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch(`${backendUrl}/api/profile/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id, // Replace userId with the actual user ID
            oldPassword,
            newPassword,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Password updated successfully
          console.log(data.message); // or show a success message to the user
        } else {
          // Handle different error scenarios
          console.error(data.message); // or display an error message to the user
        }
      } catch (error) {
        console.error('Error changing password:', error);
        // Handle network errors or other exceptions
      }
    } else {
      // Handle password mismatch error
      console.error('New password and confirm password must match');
      // Show an error message to the user indicating password mismatch
    }
  }; // Ensure that the function ends here
  

  return (
    <div>
      <div className="p-2 header">
        <Header />
      </div>

      <div className="my-5 d-flex justify-content-center">
        <div className="col-xxl-6">
          <div className="bg-secondary-soft px-4 py-5 rounded">
            <div className="row g-3">
              <h4 className="my-4">Change Password</h4>
              <div className="col-md-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Old password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={oldPassword}
                  onChange={handleOldPasswordChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputPassword2" className="form-label">New password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="exampleInputPassword3" className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <div className="gap-3 d-md-flex justify-content-md-center text-center my-5">
                <button type="button" className="btn btn-danger btn-lg" onClick={handleConfirmChange}>
                  Confirm Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 footer d-flex align-items-center justify-content-center">
        <Footer />
      </div>
    </div>
  );
}

export default Password;
