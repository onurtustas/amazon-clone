import React from "react";
import "./ProductSummary.css";
import Rating from "@mui/material/Rating";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(image);

  const removeFromBasket = () => {
    //dispatch
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id,
    });
  };

  return (
    <FlipMove
      staggerDurationBy="30"
      duration={500}
      enterAnimation="accordionHorizontal"
      leaveAnimation="accordionVertical"
      typeName="ul"
    >
      <div className="productSummary">
        <img src={image} alt="" className="productSummaryImage" />

        <div className="productSummaryInfo">
          <p className="checkoutProductTitle">{title}</p>
          <p className="checkoutProductPrice">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProductRating">
            {" "}
            <Rating
              name="half-rating"
              value={rating}
              defaultValue={2.5}
              precision={0.5}
            />
          </div>
          <div>
            {!hideButton && (
              <button onClick={removeFromBasket} className="removeFromBasket">
                Remove from Basket
              </button>
            )}
          </div>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
