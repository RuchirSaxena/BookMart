import React from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";
const Index = (props) => {
  const navigate = useNavigate();
  const id = props.id;
  const handleClick = () => {
    navigate(`/productdetails/${id}`);
  };
  return (
    <div class="card-container" key={props.key}>
      <div class="card-details">
        <div className="img-container">
          <img src={props.image} alt="Loading Error" />
        </div>
        <div className="data">
          <div class="text-title">{props.title}</div>
          <div class="text-body">&#8377;{props.price}</div>
        </div>
      </div>
      <button class="card-button" onClick={handleClick}>
        More info
      </button>
    </div>
  );
};

export default Index;
