import React, { useState, useEffect } from "react";
import "./Index.css";
import Card from "../Card/Index";
import Filter from "../Filter/Index";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../HeadingUI";
const Index = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Heading text={"Filters"} />
      <section className="filter">
        <Filter books={books} loading={loading} />
      </section>
    </>
  );
};

export default Index;
