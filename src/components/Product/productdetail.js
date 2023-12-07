import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productdetail.css";
import { ViewProductById } from "../../Service/productService";
import { AddProduct } from "../../Service/CartService";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const { id, user_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ViewProductById(id);
        setProduct(response.data);
        console.log("Product data:", response.data);
      } catch (error) {
        console.error("Error fetching product", error);
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

  const addtoCart = () => {
    if (!selectedSize || !selectedColor || !product.item) {
      // Ensure that all necessary data is available
      alert("Color or size is missing");
      return;
    }

    const cartItem = {
      user_id: user_id, // Use the user_id from useParams
      name: product.item.product_name,
      price: product.item.price,
      type: product.item.product_type,
      quantity: 1, // You can adjust the quantity as needed
      size: selectedSize,
      color: selectedColor,
    };

    AddProduct(cartItem)
      .then((response) => {
        console.log("Product added to cart:", response.data);
        // Optionally, you can redirect the user after adding to the cart
        // Example: history.push("/cart");
      })
      .catch((error) => {
        console.error("Error adding product to cart", error);
      });
  };

  return (
    <div className="whole">
      {product && (
        <>
          <div className="left">
            <img
              src="https://ydbrand.imgix.net/YD/PWA-Products/Y233FC11_WHT_CROP.png?bg=e6e6e6&fm=jpg&format=pjpg&h=425&q=75&rect=440%2C0%2C2120%2C3000&w=300&auto=format%2Ccompress&fit=cover&cs=tinysrgb&dpr=2&ch=Width%2CDPR"
              alt={product.item.product_name}
            />
          </div>
          <div className="right">
            <div key={product.item.id} className="info-container">
              <h1>Name: {product.item.product_name}</h1>
              <div className="description">
                <p id="desc">Product: {product.item.product_type}</p>
                <p id="price">Price: {product.item.price}</p>
              </div>
            </div>

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
            <div>
              <Link to={`/cart/${user_id}`}>
                <button className="addcontainer" onClick={addtoCart}>
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
