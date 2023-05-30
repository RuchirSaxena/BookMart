import React, { useState, useEffect } from "react";
import "./style.css";
import Searchbar from "./Searchbar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Overlay from "../Overlay";
import { useNavigate,useLocation } from "react-router-dom";
import Login from "../Authentication/Login";
import { useSelector } from "react-redux";
import IconSVG from "../../assests/icon.svg";
import Modal from "../Modal";
const Index = () => {
  const [isActive, setIsActive] = useState(true);
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userLoggedIn = useSelector((state) => state.loggedUser.loggedUserData);
  const navigate = useNavigate();


  const location = useLocation();

  const locationPath= location.pathname;


  const handleOverlayClick = (event) => {
    setIsActive((current) => !current);
    setIsSidebarActive((current) => !current);
  };

  const handleResize = () => {
    if (window.innerWidth <= 750) setModalOpen(false);
  };
  window.addEventListener("resize", handleResize);

  const handleAddBookClick = () => {
    navigate("/addbook");
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Overlay
        isActive={isActive}
        setIsActive={setIsActive}
        setIsSidebarActive={setIsSidebarActive}
      />

      <div className="navbar-container">
        <logo
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="icon-img" src={IconSVG} alt="icon"></img>
          <span>BookMart</span>
        </logo>
        {locationPath === "/login" ? "" : <Searchbar />}
        <div className="links-container">
          <ul className="links">
            {locationPath === "/login" ? (
              ""
            ) : (
              <li>
                <a>
                  <Button
                    sx={{ color: "#f4eee0" }}
                    variant="outlined"
                    onClick={handleAddBookClick}
                  >
                    Add Book
                  </Button>
                </a>
              </li>
            )}
            {isAuth && (
              <>
                <li>
                  <a>
                    <FavoriteBorderOutlinedIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a>
                    <AddShoppingCartIcon fontSize="large" />
                  </a>
                </li>
              </>
            )}
            <li>
              <a>
                <AccountCircleIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <i
            className={`fa-solid fa-bars fa-2xl bars ${
              isActive ? "active" : " "
            }`}
            onClick={handleOverlayClick}
          ></i>
          <i
            className={` fa-solid fa-xmark fa-2xl cross ${
              isActive ? " " : "active"
            }`}
            onClick={handleOverlayClick}
          ></i>
        </div>
      </div>
      <div className={`sidebar ${isSidebarActive ? " " : "sidebar-active  "}`}>
        <ul className="sidebar-links">
          <li>
            <a>SignIn</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
          <li>
            <a>UserLogo</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
