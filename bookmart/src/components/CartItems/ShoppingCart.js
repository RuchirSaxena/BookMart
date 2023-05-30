import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { payment } from "./Checkout";
import {
  doc,
  collection,
  query,
  where,
  addDoc,
  getDocs,
} from "firebase/firestore";
import CartCard from "./CartCard";
import "./ShoppingCartStyle.css";
import Checkout from "./Checkout";
const ShoppingCart = () => {
  const [cartData, setCartData] = useState([]);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const GetCurrentUser = () => {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  };
  const loggeduser = GetCurrentUser();

  const calculateTotal = () => {
    const total = cartData.reduce((accumulator, item) => {
      const itemTotal = item.product.priceOffered * item.quantity;
      return accumulator + itemTotal;
    }, 0);
    return total;
  };

  const checkoutToPayment = () => {
    payment(checkoutTotal);
  };

  useEffect(() => {
    if (loggeduser) {
      const getCartData = async () => {
        const path = `cart-${loggeduser[0].uid}`;
        const cartArray = [];
        getDocs(collection(db, path))
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              cartArray.push({ ...doc.data(), id: doc.id });
            });
            setCartData(cartArray);
          })
          .catch("Error");
      };
      getCartData();
    }
  }, [cartData,loggeduser]);

  useEffect(() => {
    if (cartData.length > 0) {
      const total = calculateTotal();
      setCheckoutTotal(total);
    } else {
      setCheckoutTotal(0);
    }
  }, [cartData]);

  return (
    <div>
      {cartData.length !== 0 ? (
        <div>
          <div className="cart-head">Your Cart Items</div>
          <div className="allcartitems">
            {cartData.map((item) => (
              <CartCard
                key={item.id}
                itemdata={item}
                userId={loggeduser[0].uid}
                cartLength={cartData.length}
              />
            ))}
          </div>

          <div className="card-total">
            <h3>
              Cart Total: <span>Rs. {checkoutTotal}</span>
            </h3>
            <button onClick={checkoutToPayment}>Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;
