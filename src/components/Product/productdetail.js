import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ViewProductById } from "../../Service/productService";
import { AddNewProduct } from "../../Service/CartService";
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
        const response = await ViewProductById(id);

        console.log("Received product data:", response.data);

        if (!response.data || !response.data.item) {
          throw new Error(
            "Product data is missing or not in the expected format"
          );
        }

        setProduct(response.data.item);
        setProductDescription(response.data.item.description);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data. Please try again later.");
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

      const result = await AddNewProduct(
        product.product_name,
        product.product_type,
        product.price,
        1, // Quantity (you may want to update this)
        selectedSize,
        selectedColor
      );

      console.log("Add to cart result:", result);

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
                {/* Add similar blocks for other colors */}
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
