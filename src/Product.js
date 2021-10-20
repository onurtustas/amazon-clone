import React from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="productRating">
          <p>
            <Rating
              name="half-rating"
              value={rating}
              defaultValue={2.5}
              precision={0.5}
            />
          </p>
        </div>
      </div>
      <img src={image} alt="" className="productImg" />
      <div>
        <button className="basketBtn">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
