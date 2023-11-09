import React, { useState } from "react";
import "./LogIn.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  async function handleSignUp(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email ,password}),
      });

      if (response.ok) {
      } else {
        // Handle sign-up failure, show an error message
        const errorData = await response.json();
        setError(errorData.message);
        console.error('Sign Up failed');
      }
    } catch (error) {
      // Handle network errors, request failures, etc.
      setError('An error occurred');
      console.error('An error occurred', error);
    }
  }

  return (
    <div>
      <div className="p-2 header">
        <Header />
      </div>
      <hr className="custom-hr" />
      <div className="login">
        <form onSubmit={handleSignUp}>
          <div className="login-container1">
            <div className="login__container2">
              <h1 className="login__title">Register</h1>
              {error && <div className="error">{error}</div>}
              <form method="post" action="/account" id="create_customer" acceptCharset="UTF-8" data-login-with-shop-sign-up="true">
                <input type="hidden" name="form_type" value="create_customer" />
                <input type="hidden" name="utf8" value="✓" />
                <div className="login__inputs">
                  <div className="form-group">
                    <input type="text" name="customer[first_name]" placeholder="First name" id="input-email" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="customer[last_name]" placeholder="Last name" id="input-lastname" />
                  </div>
                  <div className="form-group required">
                      <input
                      type="email"
                      required="required"
                      name="customer[email]"
                      placeholder="Email address"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                       />
                  </div>
                </div>
                <div className="login__button">
                  <input className="button" type="submit" value="Register" />
                </div>
                <div className="login__forgot-password">
                  By creating your account, you agree to our<br />
                  <a href="/pages/terms">Terms & conditions</a> and <a href="/pages/privacy">Privacy policy</a>
                </div>
                <div className="login__register">
                  <Link to="/login">
                    <a>I already have an account</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
      <div className="p-2 footer">
        <Footer />
      </div>
    </div>
    
  );
}

export default Register;
