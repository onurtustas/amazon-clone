import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    console.log("useEffect");

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secret is", clientSecret);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    console.log(elements.getElement(CardElement));
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const messageRef = doc(db, "users", "orders");

        const document = setDoc(doc(messageRef, user?.uid, paymentIntent.id), {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
        </h1>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h1>Delivery Addres</h1>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>Beşiktaş, 34001</p> <p>Beşiktaş, 34001</p>
            <p>İstanbul</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h1>Review items and delivery</h1>
          </div>
          <div className="paymentItems">
            {basket.map((basketItem) => (
              <CheckoutProduct
                id={basketItem.id}
                image={basketItem.image}
                price={basketItem.price}
                rating={basketItem.rating}
                title={basketItem.title}
              />
            ))}
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h1>Payment Method</h1>
          </div>
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="PaymentPriceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        <strong>Order Total: {value}</strong>
                      </p>
                    </>
                  )}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalScale={2}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
