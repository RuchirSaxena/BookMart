import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPinterest,
//   FaCartPlus,
// } from "react-icons/fa";
// import "./SingleProduct.scss";

const Productdetails = () => {
  
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZo64M-5yduHuE8FzjOp6lV2q-ryCSsE8f5w_IBIs&s" alt="product" />
          </div>
          <div className="right">
            <span className="name">Babu</span>
            <span className="price">$10</span>
            <span className="desc">Nice pic dear</span>
                 
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>LOL</span>
              </span>
              <span className="text-bold">
                Share:
                {/* <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span> */}
              </span>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Productdetails;

 