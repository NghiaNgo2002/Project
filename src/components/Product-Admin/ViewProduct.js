// ProductViewPage.js
import React, { useState, useEffect } from "react";
import "./ViewProduct.css";
import Sidebar from "../Dashboard/sidebar";
import Header from "../Dashboard/Header-Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  ViewProductbyID,
  updateProductID,
  deleteProduct,
} from "../../Service/productadmin";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const ProductViewPage = () => {
  const [productData, setProductData] = useState({});
  const [editableFields, setEditableFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ViewProductbyID(id);
        setProductData(response.data.item);
        console.log("Product data:", response.data.item);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();
  const handleDelete = async (id, event) => {
    event.preventDefault();

    try {
      await deleteProduct(id);
      toast.success("Product deleted successfully");
      navigate("/product-list");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product: Unable to delete the product");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditableFields({ ...productData });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const id = productData.id;

    try {
      const updatedProductData = { ...productData, ...editableFields };
      setProductData(updatedProductData);

      await updateProductID(id, updatedProductData);
      setIsEditing(false);
      toast.success("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="container-profile">
        <div className="user-profile">
          {" "}
          {/* Updated class name here */}
          <hr />
          <h2>Product Details</h2>
          <ul className="user-list">
            {Object.keys(productData).length > 0 && (
              <form>
                <div>
                  <strong>ID: </strong>
                  <span onClick={() => handleEdit(productData.id)}>
                    {`${productData.id}`}
                  </span>
                </div>
                <div>
                  <strong>Product Name: </strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editableFields.product_name || ""}
                      onChange={(e) =>
                        setEditableFields({
                          ...editableFields,
                          product_name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    `${productData.product_name}`
                  )}
                </div>
                {/* Add more fields as needed */}
                {/* ... */}
                <div className="action-buttons">
                  {!isEditing ? (
                    <>
                      <button
                        className="action-button delete"
                        onClick={(e) => handleDelete(productData.id, e)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        className="action-button update"
                        onClick={() => handleEdit(productData.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </>
                  ) : (
                    <button
                      className="action-button confirm"
                      type="submit"
                      onClick={handleSave}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  )}
                </div>
              </form>
            )}
          </ul>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default ProductViewPage;
