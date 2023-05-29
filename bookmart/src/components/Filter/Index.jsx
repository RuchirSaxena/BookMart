import React, { useEffect, useState, lazy, Suspense } from "react";
import Card from "../Card";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../HeadingUI";
const LazyCard = lazy(() => import("../Card"));
const Index = (props) => {
  const [filtered, setFiltered] = useState(props.books);
  const [filter, setFilter] = useState("");
  const [filterSelected, setfilterSelected] = useState(false);
  const [categorySelected, setCategory] = useState("");
  const loading = props.loading;
  const handleCategorySelect = (category) => {
    const filteredBooks = props.books.filter(
      (book) => book.category === category
    );
    setCategory(category);
    setfilterSelected(true);
    setFiltered(filteredBooks);
    setFilter(category);
  };

  useEffect(() => {
    setFiltered(props.books);
  }, [loading]);
  return (
    <div className="filter">
      <div className="row">
        <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
          <div className="secondAnimation">
            <div
              className={
                filter === "Self Help"
                  ? "cardContainer active"
                  : "cardContainer"
              }
              onClick={() => handleCategorySelect("Self Help")}
            >
              <img
                src="https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2021/11/selfhelp2k.jpg"
                alt="Self Help"
              />
              <p>Self Help</p>
            </div>
          </div>
        </div>
        <div className="firstAnimation col-6  col-sm-6 col-md-3 col-lg-2 m-2">
          <div className="secondAnimation">
            <div
              className={
                filter === "Education"
                  ? "cardContainer active"
                  : "cardContainer"
              }
              onClick={() => handleCategorySelect("Education")}
            >
              <img
                src="https://img.freepik.com/premium-photo/photograph-wooden-table-with-vintage-book-open-it_410516-14808.jpg?w=740"
                alt="Mystery"
              />
              <p>Education</p>
            </div>
          </div>
        </div>
        <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
          <div className="secondAnimation">
            <div
              className={
                filter === "Romance" ? "cardContainer active" : "cardContainer"
              }
              onClick={() => handleCategorySelect("Romance")}
            >
              <img
                src="https://img.freepik.com/free-photo/red-rose-inside-open-book_181624-28498.jpg?w=740&t=st=1683527586~exp=1683528186~hmac=864ca4da2d7d3a07b23c35d5c1eb202363f6e9779b7a5641538930b260cf7af0"
                alt="Romance"
              />
              <p>Romance</p>
            </div>
          </div>
        </div>
        <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
          <div className="secondAnimation">
            <div
              className={
                filter === "Comedy" ? "cardContainer active" : "cardContainer"
              }
              onClick={() => {
                handleCategorySelect("Comedy");
              }}
            >
              <img
                src="https://media.npr.org/assets/img/2012/07/16/humor-57edbd64049db5b1b2c321a612e07a7e734bbe25-s1100-c50.jpg"
                alt="Comedy"
              />
              <p>Comedy</p>
            </div>
          </div>
        </div>
        <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
          <div className="secondAnimation">
            <div
              className={
                filter === "Fiction" ? "cardContainer active" : "cardContainer"
              }
              onClick={() => handleCategorySelect("Fiction")}
            >
              <img
                src="https://static.toiimg.com/thumb/58907558.cms?width=680&height=512&imgsize=199255"
                alt="Science-fictional"
              />
              <p>Fiction</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setFiltered(props.books);
            setFilter("");
          }}
        >
          CLear Filter
        </button>
      </div>
      <section className="bookContainer ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row justify-content-center">
            {filter ? (
              <Heading text={categorySelected} />
            ) : (
              <Heading text={"Popular Books"} />
            )}
        <Suspense fallback={<div>Loading...</div>}>
            {filtered?.map((bookItem) => (
              <div
                className="col col-sm-6 col-md-3 col-lg-2 m-2"
                key={bookItem.id}
              >
                <LazyCard
                  title={bookItem.name}
                  price={bookItem.priceOffered}
                  image={bookItem.imgURLs[0]}
                  id={bookItem.id}
                />
              </div>
            ))}
            </Suspense>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
