import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

function Cart() {
  const [clicked, setClicked] = useState(false);

  const handleLinkClick = () => {
    // Set clicked to false when the link is clicked
    setClicked(false);
  };

  return (
    <div>
      <div className = "p-2 header">
        <Header/>
      </div>
  
    <div className="cart">
      <div className="shopping-cart">
        <h1>Shopping cart</h1>
      </div>
      <div className="main-product">
        <div className="detail-cart">
          <h4>Product</h4>
          <div className="small-line-main"></div>
          <div className="main-des">h1</div>
        </div>
        <div className="payment-cart">
          <h4>Order Summary</h4>
          <div className="small-line-payment"></div>
          <div className="total-money">
            <h4 id="sub">SUBTOTAL</h4>
            <h4>Money</h4>
          </div>
          <button id="payment-btn">PROCESS TO CHECKOUT</button>
          <div className="icon-link">
            <div className="small-line-payment-icon"></div>
            <span>Accept Payment Methods</span>
            <img src="https://durotan-fashion.myshopify.com/cdn/shop/files/payment_ef2dcab9-feab-4a52-80b2-d13053ddefdc_2000x.png?v=1655036319" />
          </div>
        </div>
      </div>
      <Link to="/Shop" onClick={handleLinkClick}>
        <p>CONTINUE SHOPPING</p>
      </Link>
    </div>
    <div className = "p-2 footer d-flex align-items-center justify-content-center">
      <Footer/>
    </div>
    </div>
  );
}

export default Cart;
