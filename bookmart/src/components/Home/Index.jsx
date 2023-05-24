import React, { useState, useEffect } from "react";
import "./style.css";
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
import { authActions } from "../../store";
const Index = () => {
  const [user, setUser] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();



  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "booksmanually"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBooks(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const GetCurrentUser = () => {
    const userCollectionRef = collection(db, "users");

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            console.log(data);
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
  const loggedUser = GetCurrentUser();
  console.log(loggedUser);

  const userLogOut = () => {
    auth.signOut();
    dispatch(authActions.logout());
  };
  return (
    <>
      <button onClick={userLogOut}>Logout</button>
      <Carousel />
      <Heading text={"Filters"} />
      <section className="filter">
        <Filter books={books} loading={loading} />
      </section>
    </>
  );
};

export default Index;
