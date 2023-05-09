import React, { useState, useEffect } from "react";
import "./Index.css";
import Card from "../Card/Index";
import Filter from "../Filter/Index";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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

  console.log(books);

  return (
    <>
      <Heading text={"Filters"} />
      <section className="filter">
        <Filter books={books} />
      </section>
      <section className="bookContainer ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row justify-content-center">
            {books.map((bookItem) => (
              <div
                className="col col-sm-6 col-md-3 col-lg-2 m-2"
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
    </>
  );
};

export default Index;
