import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase";

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
const ShoppingCart = () => {
  const [cartData,setCartData] = useState([]);

  
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

 



  return (
    <div>
    
      {cartData.length !==0 ? (
        <div>
          <div className="cart-head">Your Cart Items</div>
          <div className="allcartitems">
            {cartData.map((item) => (
              <CartCard key={item.id} itemdata={item} userId = {loggeduser[0].uid} cartLength = {cartData.length}  />
    
            ))}
    
          </div>
        
          <div className="card-total">
          <h3>
            Cart Total : <span>Rs.{" "}{ 
           cartData.map(item =>
           item.product.priceOffered * item.quantity)
           .reduce((total,value) =>total+value  ,0)  }       

        
              
              </span>
          </h3>
          <button>Checkout</button>
        </div>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;