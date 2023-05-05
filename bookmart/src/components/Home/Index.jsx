import React, { useState, useEffect } from "react";
import "./Index.css";
import Card from "../Card/Index";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";
const Index = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "booksmanually"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBooks(list);
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
    <section className="bookContainer">
      <Card
        title="Sushant1"
        price="10"
        image="https://th.bing.com/th/id/R.c5b2747be236f15c6beead918a0062ef?rik=3xAQFsq44DFsfQ&riu=http%3a%2f%2fimg02.deviantart.net%2febc2%2fi%2f2013%2f159%2f4%2f7%2fpile_of_books_on_a_black_background_by_macinivnw-d68c8a1.jpg&ehk=twfYMiI8Fo2XtATOuCGIreByTSdFFvJ86UsE9LlOQR0%3d&risl=&pid=ImgRaw&r=0"
        id="01"
      />
      <Card
        title="Sushant2"
        price="150"
        image="https://th.bing.com/th/id/OIP.xRo_EoQakakoZ3C3SlEXvgAAAA?pid=ImgDet&w=140&h=212&c=7"
        id="02"
      />
      <Card
        title="Sushant3"
        price="1600"
        image="https://media.istockphoto.com/photos/stack-of-colored-books-isolated-on-white-with-clipping-path-picture-id496954602?k=6&m=496954602&s=612x612&w=0&h=jQwzUYtwiBKzvgKZusMtKpvX4Bt2zII_hc4nCk6x2tU="
        id="03"
      />
      <Card
        title="Sushant4"
        price="1600"
        image="https://media.istockphoto.com/photos/stack-of-colored-books-isolated-on-white-with-clipping-path-picture-id496954602?k=6&m=496954602&s=612x612&w=0&h=jQwzUYtwiBKzvgKZusMtKpvX4Bt2zII_hc4nCk6x2tU="
        id="04"
      />
      <Card
        title="Sushant5"
        price="109"
        image="https://th.bing.com/th/id/R.c5b2747be236f15c6beead918a0062ef?rik=3xAQFsq44DFsfQ&riu=http%3a%2f%2fimg02.deviantart.net%2febc2%2fi%2f2013%2f159%2f4%2f7%2fpile_of_books_on_a_black_background_by_macinivnw-d68c8a1.jpg&ehk=twfYMiI8Fo2XtATOuCGIreByTSdFFvJ86UsE9LlOQR0%3d&risl=&pid=ImgRaw&r=0"
        id="05"
      />
    </section>
  );
};

export default Index;
