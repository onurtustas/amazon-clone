import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello</span>
          <span className="headerOptionLineTwo">Sign in</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Return</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerBasketOption">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo headerBasketCnt">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
