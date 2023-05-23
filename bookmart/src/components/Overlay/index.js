import React from 'react'
import './style.css';
const Overlay = (props) => {
     const handleClick = (event) => {
       props.setIsActive((current) => !current);
     };
  return (
    <div
      className={`overlay ${props.isActive ? "" : "active-overlay"}`}
      onClick={handleClick}
    ></div>
  );
}

export default Overlay;