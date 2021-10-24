import React from "react";
import "./ProductSummary.css";
import Rating from "@mui/material/Rating";
import { useStateValue } from "./StateProvider";

function ProductSummary({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //dispatch
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id,
    });
  };

  return (
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
        <button onClick={removeFromBasket} className="removeFromBasket">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default ProductSummary;
