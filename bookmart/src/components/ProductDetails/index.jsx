import React, { useEffect, useState } from "react";
import "./style.css";
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
      <div class="contain">
        <div class="box">
          
          <div class="images">
            
            <div class="img-holder active">
              
              <div
                id="carouselExampleRide"
                className="carousel slide carousel-css "
                data-bs-ride="true"
              >
                <div className="carousel-inner image-slider">
                  <div className="carousel-item active ">
                    <img
                      src={product?.imgURLs}
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
                      className="carousel-control-next-icon color"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="basic-info">
            <h1 >{product.name}</h1>

            <span>Rs. {product.priceOffered}</span>
            <div>Rs. {product.originalPrice}</div>

            <p class="green">{Constants.inclusive}</p>

            <div class="options">
              <button type="button" class="btn">
                <i class="fas fa-shopping-cart"></i>&nbsp;  {Constants.cart}
              </button>
              <button type="button" class="btn">
                <i class="fa fa-heart"></i>&nbsp; {Constants.wishlist}
              </button>
            </div>
          </div>
          <div class="description">
            <h4>{Constants.aboutthisItem} </h4>
            <p>{product.description}</p>
            <hr/>
            <ul class="features">
              
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
        </div>
      </div>
    </>
  );
};

export default Index;
