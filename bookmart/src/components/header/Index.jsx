import React, { useState } from "react";
import Searchbar from "./Searchbar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Overlay from "../Overlay";
import { useNavigate } from "react-router-dom";
import Login from "../Authentication/Login";
import './index.css';
import { useSelector } from "react-redux";
import IconSVG from '../../assests/icon.svg';
const Index = () => {
  const [isActive, setIsActive] = useState(true);
  const [isSidebarActive,setIsSidebarActive]= useState(true);
  const [isAccountSidebarActive,setIsAccountSidebarActive]= useState(true);
  const isAuth = useSelector(state =>state.auth.isAuthenticated);
  const userLoggedIn = useSelector((state) => state.loggedUser.loggedUserData);
  const navigate = useNavigate();



 
  const handleOverlayClick = (event) => {
    setIsActive((current) => !current);
    setIsSidebarActive((current)=> !current);
  };
  const handleAccountOverlayClick = (event) => {
    setIsActive((current) => !current);
  };


  const handleAddBookClick = ()=> {
      navigate('/addbook');
    }
  

  const [openModal, setOpenModal] = useState(false);
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
          BookMart
        </logo>
        <Searchbar />

        <div className="links-container">
          <ul className="links">
            <li>
              <a>
                <Button variant="outlined" onClick={handleAddBookClick}>
                  Add Book
                </Button>
              </a>
            </li>
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
                <AccountCircleIcon
                  fontSize="large"
                  onClick={handleAccountOverlayClick}
                />
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
      {openModal && <Login />}
    </>
  );
};

export default Index;
