import React, { useState } from "react";
import "./gridview.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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

  const [clicked, setClicked] = useState(false);

  const handleLinkClick = () => {
    // Set clicked to false when the link is clicked
    setClicked(false);
  };

  return (
    <div>
      <div className="quickviewpage">
        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <Link to="/detail" onClick={handleLinkClick}>
            <p id="name">Name : </p>
          </Link>
          <Link to="/detail" onClick={handleLinkClick}>
            <p id="price">Price : </p>
          </Link>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-1">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-2">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>
      </div>

      <div className="quickviewpage">
        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-3">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-4">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-5">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>
      </div>

      <div className="quickviewpage">
        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-6">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-7">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>

        <div className="qview">
          <div className="imge">
            <Slider {...settings}>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
              <div>
                <img src="https://durotan-fashion.myshopify.com/cdn/shop/products/12a_1200x.jpg?v=1652958367" />{" "}
              </div>
            </Slider>
            <div className="info-8">
              <button className="btn-grid">Quick view</button>
            </div>
          </div>
          <p id="name">Name : </p>
          <p id="price">Price : </p>
        </div>
      </div>
    </div>
  );
}

export default GridView;
