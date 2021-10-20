import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />

      <button className="checkoutBtn">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
