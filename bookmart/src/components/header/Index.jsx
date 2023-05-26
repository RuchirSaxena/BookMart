import React, { useState } from "react";
import "./style.css";
import Searchbar from "./Searchbar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Overlay from "../Overlay";
import { useNavigate } from "react-router-dom";
import Login from "../Authentication/Login";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import Button from '@mui/material/Button';
const Index = () => {
  const [isActive, setIsActive] = useState(true);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const [openModal, setOpenModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    auth.signOut();
    dispatch(authActions.logout());
  };

  return (
    <>
      <Overlay isActive={isActive} setIsActive={setIsActive} />

      <div className="navbar-container">
        <logo
          onClick={() => {
            navigate("/");
          }}
        >
          BookMart
        </logo>
        <Searchbar />
        {isAuth && (
          <div className="links-container">
            <ul className="links">
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
              <li onClick={toggleDropdown}>
                <a>
                  <AccountCircleIcon fontSize="large" />
                </a>
                {showDropdown && ( 
                  <ul className="dropdown-menu">
                    <li>
                      <a>Welcome User</a>
                    </li>
                    <li>
                      <a>Help</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}><Button variant="outlined">LogOut</Button></a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
        <div className="icons">
          <i
            className={`fa-solid fa-bars fa-2xl bars ${
              isActive ? "active" : ""
            }`}
            onClick={handleClick}
          ></i>
          <i
            className={` fa-solid fa-xmark fa-2xl cross ${
              isActive ? "" : "active"
            }`}
            onClick={handleClick}
          ></i>
        </div>
      </div>
      <div className={`sidebar ${isActive ? "" : "sidebar-active"}`}>
        <ul className="sidebar-links">
          <li>
            <button onClick={() => setOpenModal((prev) => !prev)}>Login</button>
          </li>
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
