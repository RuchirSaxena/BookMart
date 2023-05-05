import React from "react";
import "./Index.css";
const Index = (props) => {
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
