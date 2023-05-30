import React from "react";
import "./style.css";
import { useNavigate , useLocation} from "react-router-dom";
const Index = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMoreInfo = () => {
    const state = { message: "hellooooooooooooooooooo"};
    navigate(`/productdetails/${props.id}`, { state });
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

      <button
        class="card-button"
        onClick= {handleMoreInfo}
      >
        More info
      </button>
    </div>
  );
};

export default Index;
