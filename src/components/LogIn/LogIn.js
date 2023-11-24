import React from "react";
import "./LogIn.css";
import Footer from "../../Layout/Footer";
import {Link} from "react-router-dom";
import { useState } from "react";

function Modal({ message, onClose }) {
  // Log to see if this component renders
  console.log('Modal rendering with message:', message);

  // Now, the modal visibility is controlled by inline style based on the `message`.
  return (
    <div className="modal" style={{ display: message ? 'flex' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  // inside the functional component
const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Construct the URL from the environment variable or default to a local URL
 

  async function handleLogin(event) {
    event.preventDefault();
    console.log('Handle login called');
  
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful, setting message');
        setMessage('Login successful! Redirecting...');
        setIsLoggedIn(true); // Set the isLoggedIn state to true
  
        // Save the token to localStorage or sessionStorage
        localStorage.setItem('User', JSON.stringify(data));
        // Redirect to the home page after a delay
      setTimeout(() => {
        setMessage('');

        const userRole = data.accounts.role;
        if (userRole === 'admin') {
          window.location.href = '/home-admin';
        } else {
          window.location.href = '/home';
        }
      }, 3000);
  
      } else {
        console.log('Login failed, setting error message');
        let errorMessage = data.message || 'Login Failed: username or password is not correct';
        setError(errorMessage);
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred');
      setMessage('An error occurred: ' + error.message);
    }
  }

  return (
    <div>
       <Modal message={message} onClose={() => setMessage('')} />
    <div className="login js-login" onSubmit={handleLogin}>
      <div className="login-container1">
        <div className="login__container2">
          <h1 className="login__title">Sign in</h1>
          {error && <div className="error-message">{error}</div>}
          <form
            method="post"
            action="/account/login"
            id="customer_login"
            acceptCharset="UTF-8"
            data-login-with-shop-sign-in="true"
          >
            <input type="hidden" name="form_type" value="customer_login" />
            <input type="hidden" name="utf8" value="✓" />
            <div className="login__inputs">
              <div className="form-group required">
                <input
                  type="email"
                  required="required"
                  name="customer[email]"
                  placeholder="Email address"
                  id="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group required">
                <input
                  type="password"
                  required="required"
                  name="customer[password]"
                  placeholder="Password"
                  id="input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login__button">
              <input className="button" type="submit" value="SIGN IN" />
            </div>
            {isLoggedIn && <Modal message="Login successful! Redirecting ...." onClose={() => setIsLoggedIn(false)} />} 
            <div className="login__forgot-password" id="forgot-password">
              <a href="#recover" className="js-go-to-forgotten-password">
                Forgotten your password?
              </a>
            </div>
            <div className="login__register">
            <Link to="/register" >
            <a>I don’t have an account</a>
          </Link>
              
            </div>
            <input type="hidden" name="return_url" value="/account" />
          </form>
        </div>
      </div>
    </div>
    <div className = "p-2 footer">
       <Footer/>
       </div>
    </div>
  );
}

export default LogIn;
