import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
function Cart() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/cart");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log("jsonnn", json);

        if (json.items && Array.isArray(json.items)) {
          setProduct(json.items);
        } else {
          setError("Data structure is not as expected");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array to useEffect

  return (
    <div>
    <div className="p-2 header">
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
          <div className="main-des">
            <table>
              <thead>
                <tr className="detail-product">
                  <th id="idcart">Id</th>
                  <th id="namecart">Name</th>
                  <th id="typecart">Type</th>
                  <th id="pricecart">Price</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => (
                  <tr key={item.id} className="detail-product">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <img
              src="https://durotan-fashion.myshopify.com/cdn/shop/files/payment_ef2dcab9-feab-4a52-80b2-d13053ddefdc_2000x.png?v=1655036319"
              alt="Payment methods"
            />
          </div>
        </div>
      </div>
      <Link to="/Shop">
        <p>CONTINUE SHOPPING</p>
      </Link>
    </div>
    <div className="p-2 footer">
      <Footer/>
    </div>

    </div>
  );
}

export default Cart;
