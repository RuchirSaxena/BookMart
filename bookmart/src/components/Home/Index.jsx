import React, { useState, useEffect } from "react";
import "./Index.css";
import Card from "../Card/Index";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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

  console.log(books);

  return (
    <section className="bookContainer ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {books.map((bookItem) => (
            <div
              className="col col-12 col-sm-4 col-md-3 col-lg-3"
              key={bookItem.id}
            >
              <Card
                title={bookItem.name}
                price={bookItem.priceOffered}
                image={bookItem.imgURLs[0]}
                id={bookItem.id}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Index;
