import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LogIn.css';


function ResetPassword() {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTokenSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Error: Passwords do not match.');
      return;
    }

    try {
      // Make a POST request to your backend API to reset the password with token and new password
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken: token, newPassword, confirmPassword }),
      });

      if (response.status === 200) {
        setMessage('Password reset successful. You can now login with your new password.');
        toast.success('Password reset successful. You can now login with your new password.');
        navigate('/');
      } else {
        setMessage('Error: Could not reset password. Please try again later.');
        toast.error('Error: Could not reset password. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="login js-login">
      <div className="login-container1">
        <div className="login__container2">
          <h1 className="login__title">Reset Password</h1>
          <p className="login__message">
            Enter the token sent to your email and set a new password.
          </p>
          {error && <div className="error-message">{error}</div>}
          {message && <div className="info-message">{message}</div>}
       <form onSubmit={handleTokenSubmit}>
            <div className="login__inputs">
              <div className="form-group required">
                <input
                  type="text"
                  required
                  className="login__input"
                  placeholder="Enter token"
                  value={token}
                  onChange={handleTokenChange}
                />
              </div>
             
              <div className="form-group required">
                <input
                  type="password"
                  required
                  className="login__input"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div className="form-group required">
                <input
                  type="password"
                  required
                  className="login__input"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            <div className="login__button">
              <input className="button" type="submit" value="Confirm Change Password" />
            </div>
          </form>
          <div className="login__forgot-password">
            <Link to="/">Back to login</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
