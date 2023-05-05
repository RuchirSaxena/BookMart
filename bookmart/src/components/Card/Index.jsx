import React from "react";
import "./Index.css";
const Index = (props) => {
  return (
    <div class="card">
      <div class="card-details">
        <div className="img-container">
          <img src={props.image} alt="Loading Error" />
        </div>
        <p class="text-title">{props.title}</p>
        <p class="text-body">{props.price}</p>
      </div>
      <button
        class="card-button"
        onClick={() => {
          alert(`Clicked ${props.id}`);
        }}
      >
        More info
      </button>
    </div>
  );
};

export default Index;
