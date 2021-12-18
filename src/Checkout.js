import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ProductSummary from "./ProductSummary";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket, dispatch);

  return (
    <div className="checkout">
      <FlipMove duration={500} easing="ease-out">
        <div className="checkoutLeft">
          <img
            className="checkOutBanner"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg"
          />
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className="checkoutTitle">Your Shopping Basket</h2>

            {basket.map((basketItem) => (
              <ProductSummary
                id={basketItem.id}
                image={basketItem.image}
                price={basketItem.price}
                rating={basketItem.rating}
                title={basketItem.title}
              />
            ))}
          </div>
        </div>
      </FlipMove>
      <div className="checkOutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
