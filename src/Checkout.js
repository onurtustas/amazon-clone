import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img
          className="checkOutBanner"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg"
        />
        <div>
          <h2 className="checkoutTitle">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkOutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;