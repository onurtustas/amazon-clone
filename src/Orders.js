import React, { useState, useEffect } from "react";
import {
  limit,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const setUserOrders = async () => {
        const userRef = collection(db, "users/orders", user?.uid);
        //const q = query(userRef);

        const newDate = new Date();
        newDate.setDate(newDate.getDate() - 1);
        const q = query(userRef, orderBy("created", "desc"), limit(10));
        const querySnapshot = await getDocs(q);

        querySnapshot.docs.map((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setOrders((orders) => [...orders, { id: doc.id, data: doc.data() }]);
        });
      };
      setUserOrders();
      //console.log("Orders:>>>>>:" + orders.id);
      orders.forEach((element) => {
        console.log(element.data);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="users_Order">
        {orders.map((order, index) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
