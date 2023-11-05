import React from "react";
import "./LogIn.css";
import Header from "./Header";
function LogIn() {
  return (
    <div>
        <div className = "login-header">
       <Header/>
       </div>
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
              <a href="/account/register">I don’t have an account</a>
            </div>
            <input type="hidden" name="return_url" value="/account" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LogIn;
