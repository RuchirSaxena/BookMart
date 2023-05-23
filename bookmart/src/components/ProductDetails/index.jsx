import React, { useEffect, useState } from "react";
import "./index.css";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import Constants from "../Utilities/Constants";
const Index = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "booksmanually", id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
      } catch (error) {
        setErrorMsg("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div
            id="carouselExampleRide"
            className="carousel slide carousel-css "
            data-bs-ride="true"
          >
            <div className="carousel-inner image-slider">
              <div className="carousel-item active ">
                <img
                  src={product.imgURLs}
                  className="d-block w-100 carousel-img"
                  alt="Loading Error !"
                />
              </div>
              {product.imgURLs?.slice(1).map((item, index) => (
                <div className="carousel-item ">
                  <img src={item} alt={Index}></img>
                </div>
              ))}

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <a href="#" class="product-link">
              {Constants.link}
            </a>

            <div className="product-price">
              <p className="last-price">
                {Constants.originalPrice}
                <span>{product.originalPrice}</span>
              </p>
              <p className="new-price">
                {Constants.newPrice}
                <span>{product.priceOffered}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>{Constants.aboutthisItem} </h2>
              <p>{product.description}</p>
              <ul>
                <li>
                  {Constants.ownersName} <span>{product.ownerInfo?.name}</span>
                </li>
                <li>
                  {Constants.ownersContact}
                  <span>{product.ownerInfo?.contact}</span>
                </li>
                <li>
                  {Constants.ownersEmail}
                  <span>{product.ownerInfo?.email}</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" class="btn">
                {Constants.cart}
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
