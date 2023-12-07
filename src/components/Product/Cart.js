import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer_stw from "../../Layout/Footer_stw";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  ListAllCart,
  UpdateProductByID,
  DeleteProduct,
} from "../../Service/CartService";

function Cart() {
  const [products, setProducts] = useState([]);
  const [editableFields, setEditableFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ListAllCart();

        console.log("API Response:", response);
        console.log("Response Data Structure:", response.data);

        const responseData = response.data?.items;

        if (Array.isArray(responseData)) {
          setProducts(responseData);
        } else {
          console.error("Data structure is not as expected");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Make sure to pass an empty dependency array to useEffect

  const deleteProduct = async (productId) => {
    try {
      await DeleteProduct(productId);

      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const handleUpdateProduct = async (id, newFields) => {
    try {
      console.log("Updating product:", id, newFields);

      await UpdateProductByID(id, newFields);

      // Assuming the server responds with the updated product data
      const updatedProduct = {
        ...products.find((item) => item.id === id),
        ...newFields,
      };

      // Update the product state with the new data
      setProducts((prevProducts) =>
        prevProducts.map((item) => (item.id === id ? updatedProduct : item))
      );

      setIsEditing(false); // Reset editing state
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };

  const handleCheckboxChange = (productId) => {
    const selectedProductIndex = selectedProducts.indexOf(productId);
    if (selectedProductIndex === -1) {
      // If not exists, add to the array
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      // If exists, remove from the array
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts.splice(selectedProductIndex, 1);
      setSelectedProducts(updatedSelectedProducts);
    }
  };

  const totalMoney = selectedProducts.reduce((total, productId) => {
    const selectedProduct = products.find((item) => item.id === productId);
    return total + selectedProduct.totalmoney;
  }, 0);
  return (
    <div>
      <div className="p-2 header">
        <Header />
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
                    <th id="typecart">Information</th>
                    <th id="pricecart">Total Price</th>
                    <th id="adjust">Adjust Product</th>
                    <th id="select">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.id} className="detail-product">
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td id="information-list">
                        <p>
                          Type: <span>{item.type}</span>
                        </p>
                        <p>
                          Price: <span>${item.price}</span>
                        </p>
                        {isEditing && editableFields[item.id] ? (
                          <>
                            <p>
                              Quantity:{" "}
                              <input
                                type="text"
                                value={editableFields[item.id]?.quantity || ""}
                                onChange={(e) =>
                                  setEditableFields((prevFields) => ({
                                    ...prevFields,
                                    [item.id]: {
                                      ...prevFields[item.id],
                                      quantity: e.target.value,
                                    },
                                  }))
                                }
                              />
                            </p>
                            <p>
                              Size:{" "}
                              <input
                                type="text"
                                value={editableFields[item.id]?.size || ""}
                                onChange={(e) =>
                                  setEditableFields((prevFields) => ({
                                    ...prevFields,
                                    [item.id]: {
                                      ...prevFields[item.id],
                                      size: e.target.value,
                                    },
                                  }))
                                }
                              />
                            </p>
                            <p>
                              Color:{" "}
                              <input
                                type="text"
                                value={editableFields[item.id]?.color || ""}
                                onChange={(e) =>
                                  setEditableFields((prevFields) => ({
                                    ...prevFields,
                                    [item.id]: {
                                      ...prevFields[item.id],
                                      color: e.target.value,
                                    },
                                  }))
                                }
                              />
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              Quantity: <span>{item.quantity}</span>
                            </p>
                            <p>
                              Size: <span>{item.size}</span>
                            </p>
                            <p>
                              Color: <span>{item.color}</span>
                            </p>
                          </>
                        )}
                      </td>
                      <td className="total">
                        {(item.totalmoney = item.price * item.quantity)}
                      </td>
                      <td className="adjust-btn">
                        <div className="adjust-btn">
                          {isEditing ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateProduct(
                                  item.id,
                                  editableFields[item.id]
                                )
                              }
                            >
                              <FontAwesomeIcon icon={faCheck} />
                            </button>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="action-button delete"
                                onClick={() => deleteProduct(item.id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                              <button
                                type="button"
                                className="action-button update"
                                onClick={() => {
                                  setIsEditing(true);
                                  setEditableFields({
                                    [item.id]: {
                                      quantity: item.quantity,
                                      color: item.color,
                                      size: item.size,
                                    },
                                  });
                                }}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(item.id)}
                          checked={selectedProducts.includes(item.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="merge-block">
            <div className="merge-block">
              <div className="payment-cart">
                <h4>Order Summary</h4>
                <div className="small-line-payment"></div>
                <div className="total-money">
                  <h4 id="sub">SUBTOTAL</h4>
                  <h4>{`$${totalMoney.toFixed(2)}`}</h4>
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
              <div className="button-continue">
                <Link to="/Shop">
                  <p>CONTINUE SHOPPING</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 footer">
        <Footer_stw />
      </div>
    </div>
  );
}

export default Cart;
