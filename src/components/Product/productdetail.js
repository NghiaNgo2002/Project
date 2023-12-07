import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./productdetail.css";
import { ViewProductById } from "../../Service/productService";
import { AddProduct } from "../../Service/CartService";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("black");
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
        console.error("Error fetching product", error);
      }
    };
    fetchData();
  }, [id]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
  };

  const addtoCart = () => {
    if (!selectedSize || !selectedColor || !product.item) {
      // Ensure that all necessary data is available
      alert("Color or size is missing");
      return;
    }

    // Retrieve existing cart items from localStorage or initialize an empty array
const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Function to check if a product exists in the cart
const findProductIndex = (cartItems, product) => {
    return cartItems.findIndex(item => item.id === product.id); // Assuming product has an 'id' property
};

// Find the index of the product in the existing cart items
const productIndex = findProductIndex(existingCartItems, product);

if (productIndex !== -1) {
    // If the product is already in the cart, update its quantity
    existingCartItems[productIndex].quantity += 1;
} else {
    // If the product is not in the cart, add it with a quantity of 1
    product.quantity = 1;
    existingCartItems.push(product);
}

// Store the updated cart items back in localStorage
localStorage.setItem("cart", JSON.stringify(existingCartItems));

      setClicked(true);

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
