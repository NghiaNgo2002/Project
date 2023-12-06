import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productdetail.css";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [productDescription, setProductDescription] = useState("");
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/productdetail/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status : ${response.status}`);
        }

        const json = await response.json();

        if (json.item) {
          setProduct(json.item);
          setProductDescription(json.item.description);
        } else {
          setError("Data structure is not as expected");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data");
      }
    };
    fetchData();
  }, [id]);

  const handleColorClick = (color) => {
    console.log("Selected color:", color);
    setSelectedColor(color);
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    console.log("Selected size:", size);
    setSelectedSize(size);
  };

  const addToCart = async () => {
    try {
      if (!selectedSize || !selectedColor) {
        console.error("Size and color must be selected.");
        return;
      }

      const response = await fetch("http://localhost:3001/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: id,
          name: product.product_name,
          type: product.product_type,
          price: product.price,
          quantity: 1,
          size: selectedSize,
          color: selectedColor,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);

      setClicked(true);

      // Redirect to "/Cart"
      window.location.href = "/Cart";
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="whole">
      <div className="left">
        <img
          src="https://ydbrand.imgix.net/YD/PWA-Products/Y233FC11_WHT_CROP.png?bg=e6e6e6&fm=jpg&format=pjpg&h=425&q=75&rect=440%2C0%2C2120%2C3000&w=300&auto=format%2Ccompress&fit=cover&cs=tinysrgb&dpr=2&ch=Width%2CDPR"
          alt={product.name}
        />
      </div>
      <div className="right">
        <div key={product.id} className="info-container">
          <h1>Name: {product.product_name}</h1>
          <div className="description">
            <p id="desc">Product: {product.product_type}</p>
            <p id="price">Price: {product.price}</p>
            <p id="description">Description: {productDescription}</p>
          </div>
        </div>

        <div className="filtercontainer">
          <div className="filtercontainer">
            <div className="filter">
              <div className="filtercolor">
                <p>Color</p>
                <div
                  className="color-wrapper"
                  onClick={() => handleColorClick("black")}
                  style={{
                    borderColor:
                      selectedColor === "black" ? "black" : "transparent",
                  }}
                >
                  <div
                    id="black"
                    className="color"
                    style={{
                      backgroundColor: "black",
                    }}
                  ></div>
                </div>
                <div
                  className="color-wrapper"
                  onClick={() => handleColorClick("darkblue")}
                  style={{
                    borderColor:
                      selectedColor === "darkblue" ? "black" : "transparent",
                  }}
                >
                  <div
                    id="darkblue"
                    className="color"
                    style={{
                      backgroundColor: "darkblue",
                    }}
                  ></div>
                </div>
                <div
                  className="color-wrapper"
                  onClick={() => handleColorClick("gray")}
                  style={{
                    borderColor:
                      selectedColor === "gray" ? "black" : "transparent",
                  }}
                >
                  <div
                    id="gray"
                    className="color"
                    style={{
                      backgroundColor: "gray",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="filter">
              <div className="filtersize">
                <p id="size">Size</p>
                <select onChange={handleSizeChange}>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/Cart">
            <button onClick={addToCart} className="addcontainer">
              ADD TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
