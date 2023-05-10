import React from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";
const Index = ({ bookDetails }) => {
  const navigate = useNavigate();
  const id = bookDetails.id;
  const clickHandeler = () => {
    navigate(`/productdetails/${id}`);
  };
  console.log(bookDetails);
  return (
    <div class="card-container">
      <div class="card-details">
        <div className="img-container">
          <img src={bookDetails.imgURLs[0]} alt="Loading Error" />
        </div>
        <div className="data">
          <div class="text-title">{bookDetails.name}</div>
          <div class="text-body">&#8377;{bookDetails.priceOffered}</div>
        </div>
      </div>
      <button class="card-button" onClick={clickHandeler}>
        More info
      </button>
    </div>
  );
};

export default Index;
