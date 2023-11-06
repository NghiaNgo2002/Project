import React from "react";
import "./LogIn.css";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";
function LogIn() {
  return (
    <div>
        <div className = "p-2 header">
       <Header/>
       </div>
       <hr className="custom-hr" />
    <div className="login js-login">
      <div className="login-container1">
        <div className="login__container2">
          <h1 className="login__title">Sign in</h1>
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
                />
              </div>
              <div className="form-group required">
                <input
                  type="password"
                  required="required"
                  name="customer[password]"
                  placeholder="Password"
                  id="input-password"
                />
              </div>
            </div>
            <div className="login__button">
              <input className="button" type="submit" value="SIGN IN" />
            </div>
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
