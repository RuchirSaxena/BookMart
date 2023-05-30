import React, { useState, useEffect, lazy, Suspense } from "react";
import Card from "../Card";
import Filter from "../Filter";
import Carousel from "../Carousel";
import { auth, db } from "../../firebase";


import {
  onSnapshot,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../HeadingUI";
import { useDispatch } from "react-redux";
import { authActions, loggedUserActions } from "../../store";

const Index = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
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
  const [wishData, setWishData] = useState([]);
  const getWishData = async () => {
    const path = `wishlist-${loggeduser[0].uid}`;
    const wishArray = [];
    getDocs(collection(db, path))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          wishArray.push({ ...doc.data(), id: doc.id });
        });
        setWishData(wishArray);
      })
      .catch("Error");
  };

  useEffect(() => {
    console.log(wishData);
  }, [wishData]);
  useEffect(() => {
    if (loggeduser) {
      getWishData();
    }
  }, [loggeduser]);

  if (user) {
    dispatch(loggedUserActions.setUser(user));
    dispatch(authActions.login());
  } else {
    dispatch(loggedUserActions.setUser(user));
    dispatch(authActions.logout());
  }

  const userLogOut = () => {
    auth.signOut();
    dispatch(authActions.logout());
  };

  if(wishData){
    console.log(wishData);
  }
  return (
    <div>
      <div class = "wishlist">
        <Heading text="Your Wishlist" />
        {wishData ? (
          <div>
            <div className="bookContainer">

              {wishData.map((bookItem) => (
                <div
                  className="col col-sm-6 col-md-3 col-lg-2 m-2"
                  key={bookItem.id}
                >
                  <Card
                    title={bookItem.product.name}
                    price={bookItem.product.priceOffered}
                    image={bookItem.product.imgURLs}
                    id={bookItem.id}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>HJGJGY</div>
        )}
      </div>
    </div>
  );
};

export default Index;
