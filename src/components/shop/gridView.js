// GridView.js
import React, { useState, useEffect } from "react";
import "./gridview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function GridView() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/product");

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

    console.log("Carts state:", product);

    if (error) {
      return <div>Error: {error}</div>;
    }

    fetchData();
  }, []);

  const renderProducts = () => {
    // Split products into groups of 3
    const groupedProducts = [];
    for (let i = 0; i < product.length; i += 2) {
      groupedProducts.push(product.slice(i, i + 2));
    }

    return groupedProducts.map((group, index) => (
      <div key={index} className="row">
        {group.map((item) => (
          <div key={item.id} className="qview">
            <div className="imge">
              <Slider {...settings}>
                <div>
                  <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
                </div>
                <div>
                  <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
                </div>
              </Slider>
              <div className="info">
                <button className="btn-grid">Quick view</button>
              </div>
            </div>
            <div className="description">
              <Link to={`/productdetail/${item.id}`}>
                <p id="name">Name : {item.name} </p>
              </Link>
              <Link to={`/productdetail/${item.id}`}>
                <p id="price">Price : {item.price} </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return <div className="quickviewpage">{renderProducts()}</div>;
}

export default GridView;
