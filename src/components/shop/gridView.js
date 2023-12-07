import React, { useState, useEffect } from "react";
import "./gridview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import * as productProfileService from "../../Service/productService";

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
        const response = await productProfileService.ListAllProduct();
        console.log("API Response:", response);
        setProducts(response.data.items ?? []); // Adjust the property based on your API response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
        setError("Error fetching product data: " + error.message);
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

    const groupedProducts = (products ?? []).reduce((acc, curr, index) => {
      if (index % 2 === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);

    if (groupedProducts.length === 0) {
      return <div>No products available.</div>;
    }

    return groupedProducts.map((group, index) => (
      <div key={index} className="row">
        {group.map((item) => (
          <div key={item.id} className="qview">
            <div className="imge">
              <Slider {...settings}>
                <div>
                  <img src={item.picture_one} alt="product" />
                </div>
                <div>
                  <img src={item.picture_two} alt="product" />
                </div>
                <div>
                  <img src={item.picture_three} alt="product" />
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
