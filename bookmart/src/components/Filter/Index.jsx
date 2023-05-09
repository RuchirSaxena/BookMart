import React, { useState, useEffect } from "react";
import Card from "../Card/Index";
import "./Index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Heading from "../HeadingUI";
const Index = (props) => {
  console.log("Filter Component");
  console.log(props.books);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");
  const handleCategorySelect = (category) => {
    setCategory(category);
    const filteredBooks = props.books.filter(
      (book) => book.category === category
    );
    setFiltered(filteredBooks);
    console.log(category);
    console.log(
      "Filtered Books",
      filteredBooks.map((book) => book.name)
    );
  };

  useEffect(() => {
    console.log(
      "Updated Filtered Books",
      filtered.map((book) => book.name)
    );
  }, [filtered]);

  return (
    <>
      <Heading text={category} />
      <div className="filter">
        <div className="row">
          <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
            <div className="secondAnimation">
              <div className="card1">
                <img
                  src="https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2021/11/selfhelp2k.jpg"
                  alt="Self Help"
                  onClick={() => handleCategorySelect("Self Help")}
                />
              </div>
            </div>
          </div>
          <div className="firstAnimation col-6  col-sm-6 col-md-3 col-lg-2 m-2">
            <div className="secondAnimation">
              <div className="card1">
                <img
                  src="https://img.freepik.com/premium-photo/photograph-wooden-table-with-vintage-book-open-it_410516-14808.jpg?w=740"
                  alt="Mystery"
                  onClick={() => handleCategorySelect("Education")}
                />
              </div>
            </div>
          </div>
          <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
            <div className="secondAnimation">
              <div className="card1">
                <img
                  src="https://img.freepik.com/free-photo/red-rose-inside-open-book_181624-28498.jpg?w=740&t=st=1683527586~exp=1683528186~hmac=864ca4da2d7d3a07b23c35d5c1eb202363f6e9779b7a5641538930b260cf7af0"
                  alt="Romance"
                  onClick={() => handleCategorySelect("Romance")}
                />
              </div>
            </div>
          </div>
          <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
            <div className="secondAnimation">
              <div className="card1">
                <img
                  src="https://media.npr.org/assets/img/2012/07/16/humor-57edbd64049db5b1b2c321a612e07a7e734bbe25-s1100-c50.jpg"
                  alt="Comedy"
                  onClick={() => handleCategorySelect("Comedy")}
                />
              </div>
            </div>
          </div>
          <div className="firstAnimation col-6 col-sm-6 col-md-3 col-lg-2 m-2">
            <div className="secondAnimation">
              <div className="card1">
                <img
                  src="https://static.toiimg.com/thumb/58907558.cms?width=680&height=512&imgsize=199255"
                  alt="Science-fictional"
                  onClick={() => handleCategorySelect("Fiction")}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          {filtered.map((book) => (
            <Card
              key={book.id}
              title={book.name}
              author={book.author}
              image={book.imgURLs[0]}
              price={book.priceOffered}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
