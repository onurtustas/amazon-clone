import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        <div className="homeRow">
          <Product
            id={10000}
            title="Acer Aspire 5 A515-56-36UT Slim Laptop"
            image="https://m.media-amazon.com/images/I/71qodgwQQ7S._AC_UL320_.jpg"
            price={449.9}
            rating={1}
          />
          <Product
            id={10001}
            image="https://m.media-amazon.com/images/I/81SkxfslViL._AC_SX569_.jpg"
            title="NERF Elite 2.0 Shockwave RD-15 Blaster"
            price={20}
            rating={4}
          />
        </div>
        <div className="homeRow">
          <Product
            id={10002}
            title="Apple AirPods Pro"
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL320_.jpg"
            rating={5}
            price={210}
          />
          <Product
            id={10003}
            image="https://images-na.ssl-images-amazon.com/images/I/51Lc8b7OOnL._AC_SR400,600_.jpg"
            title="Hasbro Gaming Monopoly: The Lord of The Rings Edition Board"
            price={20}
            rating={4}
          />
          <Product
            id={10004}
            image="https://m.media-amazon.com/images/I/614gi2pDQRS._AC_UX522_.jpg"
            title="Disney Mickey Mouse Letterman Cardigan for Women"
            price={25}
            rating={1}
          />
        </div>
        <div className="homeRow">
          <Product
            id={10005}
            image="https://m.media-amazon.com/images/I/61rCdoQ8mjL._AC_SY355_PIbundle-4,TopRight,0,0_SH20_.jpg"
            title="SYLVANIA Wifi LED Smart Light Bulb"
            price={20}
            rating={4}
          />
        </div>
        <div className="modalPopup">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
