import React, { useState } from "react";
import "./LogIn"; // Create a new CSS file for styling this page
import Footer from "../../Layout/Footer";
import { Link,useNavigate} from "react-router-dom";


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showTokenForm, setShowTokenForm] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API to check if the email exists
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/getPasswordToken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setShowTokenForm(true);
        setMessage('');
        navigate('/reset-password');
      } else {
        setMessage('Error: Email not found. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login js-login">
      <div className="login-container1">
        <div className="login__container2">
          <h1 className="login__title">Forgot Password</h1>
          <p className="login__message">
            Enter your email address below to reset your password.
          </p>
          {error && <div className="error-message">{error}</div>}
          {message && <div className="info-message">{message}</div>}
          <form onSubmit={handleEmailSubmit}>
            <div className="login__inputs">
              <div className="form-group required">
                <input
                  type="email"
                  required
                  className="login__input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange} 
                />
              </div>
            </div>
            <div className="login__button">
             <input className="button" type="submit" value="Confirm Email" />
            </div>
          </form>
          <div className="login__forgot-password">
            <Link to="/">Remembered your password? Sign in</Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ForgotPassword;
