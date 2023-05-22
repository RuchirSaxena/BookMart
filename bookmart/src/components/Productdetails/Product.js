import React, { useEffect } from "react";
import Header from "../header/";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { db } from "../../firebase";
import constants from "../Utilities/Constants";
import { getDoc } from "firebase/firestore";
import { doc, collection, query, where, addDoc } from "firebase/firestore";
import "./SingleProduct.css";

const Productdetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "booksmanually", id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data());
    };
    getProduct();
  }, []);

  return (
    <div class="hello">
      <div className="card-wrapper">
        <div className="card">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={product.imgURLs} alt="IMG" />
              </div>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">{product.name}</h2>
            <a href="#" class="product-link">
              {constants.link}
            </a>

            <div class="product-price">
              <p class="last-price">
                {constants.originalPrice}
                <span>{product.originalPrice}</span>
              </p>
              <p class="new-price">
                {constants.newPrice} <span>{product.priceOffered}</span>
              </p>
            </div>

            <div class="product-detail">
              <h2>About this item: </h2>
              <p>{product.description}</p>
            </div>

            <div class="purchase-info">
              <button type="button" class="btn">
                {constants.cart} <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
