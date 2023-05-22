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
        console.log("Error getting document:", error);
        setErrorMsg("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {/* <br />
      {product.name}
      <br />
      {product.category}
      <br />
      {product.ownerInfo?.name && <>Owner Info : {product.ownerInfo.name}</>}
      <br />
      {product.ownerInfo?.email && <>Owner Info : {product.ownerInfo.email}</>}
      <br />
      {product.ownerInfo?.contact && (
        <>Owner Info : {product.ownerInfo.contact}</>
      )}
      <br />
      {product.priceOffered}
      <br />
      {product.originalPrice}
      <br />
      {product.description}
      <br />
      {product.authorName}
      <br />
      <div className="imgContainer">
        {product.imgURLs &&
          product.imgURLs.map((url, index) => (
            <img src={url} alt={`Image ${index}`} key={index} />
          ))}
      </div> */}
          
      <div className="card-wrapper">
        <div className="card">
          <div
            id="carouselExampleRide"
            className="carousel slide carousel-css "
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={product.imgURLs}
                  className="d-block w-100 carousel-img"
                  alt="Loading Error !"
                />
              </div>
              {product.imgURLs?.map((item, index) => (
                <div className="carousel-item image-slider" >
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

          <div class="product-content">
            <h2 class="product-title">{product.name}</h2>
            <a href="#" class="product-link">
              {Constants.link}
            </a>

            <div class="product-price">
              <p class="last-price">
                {Constants.originalPrice}
                <span>{product.originalPrice}</span>
              </p>
              <p class="new-price">
                {Constants.newPrice}
                <span>{product.priceOffered}</span>
              </p>
            </div>

            <div class="product-detail">
              <h2>About this item: </h2>
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

            <div class="purchase-info">
              <button type="button" class="btn">
                {Constants.cart}
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
