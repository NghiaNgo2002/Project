import React, { useState } from "react";
import "./productdetail.css";
import { Link } from "react-router-dom";

function Productdetail() {
  const [clicked, setClicked] = useState(false);

  const handleLinkClick = () => {
    // Set clicked to false when the link is clicked
    setClicked(false);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="image">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="info-container">
          <h1>Name</h1>
          <div className="description">
            <p id="desc">Product : Shoes</p>
            <p id="price">Price : </p>
          </div>
          <div className="filtercontainer">
            <div className="filter">
              <div className="filtercolor">
                <h3>Color</h3>
                <p id="black"></p>
                <p id="darkblue"></p>
                <p id="gray"></p>
              </div>
            </div>
            <div className="filter">
              <div className="filtersize">
                <p>Size</p>
                <select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="addcontainer">
            <Link to="/detail" onClick={handleLinkClick}>
              <button>ADD TO CART</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
