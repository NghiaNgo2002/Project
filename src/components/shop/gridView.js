// gridView.js
import React, { useState, useEffect } from "react";
import "./gridview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import * as productService from "../../Service/productService";

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

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productService.getAllProducts();
        console.log("Response:", response);

        if (response.status === 200) {
          setProducts(response.data.items);
          setLoading(false);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (products.length === 0) {
      return <div>No products available.</div>;
    }

    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 2) {
      groupedProducts.push(products.slice(i, i + 2));
    }

    return groupedProducts.map((group, index) => (
      <div key={index} className="row">
        {group.map((item) => (
          <div key={item.id} className="qview">
            <div className="imge">
              <Slider {...settings}>
                <div>
                  {/* Replace "#" with the actual URL of your product image */}
                  <img src="#" alt="product" />
                </div>
                <div>
                  {/* Replace "#" with the actual URL of your product image */}
                  <img src="#" alt="product" />
                </div>
              </Slider>
              <div className="info">
                <button className="btn-grid">Quick view</button>
              </div>
            </div>
            <div className="description">
              <Link to={`/productdetail/${item.id}`}>
                {/* Make sure that "item.name" is the correct property */}
                <p id="name">Name: {item.product_name}</p>
              </Link>
              <Link to={`/productdetail/${item.id}`}>
                {/* Make sure that "item.price" is the correct property */}
                <p id="price">Price: {item.price}</p>
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
