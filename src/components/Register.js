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
       <div className="login">
      <div className="login-container1">
        <div className="login__container2">
          <h1 className="login__title">Register</h1>
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
                <input type="email" required="required" name="customer[email]" value="" placeholder="Email address" />
              </div>
              <div className="form-group required">
                <input type="password" required="required" name="customer[password]" placeholder="Password" id="input-password" />
              </div>
            </div>
            <div className="login__button">
              <input className="button" type="submit" value="Register"/>
            </div>
            <div className="login__forgot-password">
              By creating your account, you agree to our<br />
              <a href="/pages/terms">Terms & conditions</a> and <a href="/pages/privacy">Privacy policy</a>
            </div>
            <div className="login__register">
                <Link to = "/login">
                <a>I already have an account</a>
                </Link>
            </div>
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
