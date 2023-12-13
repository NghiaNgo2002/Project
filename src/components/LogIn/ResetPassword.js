import React, { useState } from "react";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import './LogIn.css';

function ResetPassword() {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make a POST request to your backend API to reset the password
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/resetPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.status === 200) {
        setMessage('Password reset successful. You can now login with your new password.');
        setError('');
      } else {
        setError('Error resetting password. Please try again.');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
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
       <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default ResetPassword;
