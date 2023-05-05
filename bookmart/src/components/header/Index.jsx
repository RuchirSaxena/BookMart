import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import "./Index.css";
const Index = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid mx-2">
        <NavLink className="navbar-brand" to="/">
          BOOKMART
        </NavLink>

        <form className="mx-5">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            size="50"
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-icon" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <li className="nav-item">
              <NavLink className="btn btn-outline-light" exact to="/users/sell">
                SELL
              </NavLink>
              </li>
            </li>
            
            <li className="nav-item">
              <li className="nav-item">
              <NavLink className="btn btn-dark" exact to="/users/sell">
                <FavoriteBorderIcon />
              </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <li className="nav-item">
              <NavLink className="btn btn-dark" exact to="/components/cart">
                <ShoppingCartOutlinedIcon />
              </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <li className="nav-item">
              <NavLink className="btn btn-dark" exact to="/components/login">
                <AccountCircleOutlinedIcon />
              </NavLink>
              </li>
            </li>
          </ul>

          
        </div>
      </div>
    </nav>
  );
};

export default Index;
