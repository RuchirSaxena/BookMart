import "./Index.css";
import { Link } from "react-router-dom";
const Filter = () => {
  return (
    <div className="categories">
      <div className="container">
        <Link to="/fiction">
          <img src="/images/sciencefiction.jpg" alt="" />
        </Link>
        <div className="overlay">Sci-Fi</div>
      </div>

      <div className="container">
        <Link to="/funny">
          <img src="/images/funny.jpg" alt="" />
        </Link>
        <div className="overlay">Comedy</div>
      </div>

      <div className="container">
        <Link to="/love">
          <img src="/images/love.jpg" alt="" />
        </Link>
        <div className="overlay">Romance</div>
      </div>

      <div className="container">
        <Link to="/mystery">
          {" "}
          <img src="/images/mystery.jpg" alt="" />
        </Link>
        <div className="overlay">Mystery</div>
      </div>

      <div className="container">
        <Link to="/selfhelp">
          <img src="/images/selfhelp.jpg" alt="" />
        </Link>
        <div className="overlay">Selhelp</div>
      </div>
    </div>
  );
};
export default Filter;
